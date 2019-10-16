const fs = require("fs");
const path = require("path");
const express = require("express");
const config = require("config")();
const ytdl = require("ytdl-core");
var ffmpeg = require("ffmpeg");

const ytdlApi = app => {
  const router = express.Router();
  app.use("/api/ytdl", router);

  router.post("/", async (req, res, next) => {
    const { body: data } = req;
    try {
      await ytdl(data.url)
        .on("progress", (length, downloaded, totallength) => {
          if (downloaded === totallength) {
            console.log({ length, downloaded, totallength });
            const loadVideo = new ffmpeg(
              path.join(__dirname, `../../uploads/${data.name}.mp4`)
            );
            loadVideo.then(
              async video => {
                const name = await video.fnExtractFrameToJPG(
                  path.join(__dirname, "../../uploads/thumbs"),
                  {
                    number: 3,
                    every_n_percentage: "30%",
                    file_name: data.name,
                    start_time: 0,
                    duration_time: 1
                  }
                );
                console.log(name);
              },
              err => {
                next(...err);
              }
            );
          }
        })
        .pipe(await fs.createWriteStream(`uploads/${data.name}.mp4`));

      res.status(200).send({ data });
    } catch (err) {
      next(err);
    }
  });
};

module.exports = ytdlApi;
