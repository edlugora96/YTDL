const fs = require("fs");
const path = require("path");
const express = require("express");
const config = require("config")();
const ytdl = require("ytdl-core");
var ffmpeg = require("ffmpeg");
const ThumbnailGenerator = require("video-thumbnail-generator").default;

const ytdlApi = app => {
  const router = express.Router();
  app.use("/api/ytdl", router);

  router.post("/", async (req, res, next) => {
    const { body: data } = req;
    try {
      await ytdl(data.url, {
        quality: "highest"
      })
        .on("progress", (length, downloaded, totallength) => {
          console.log({ length, downloaded, totallength });
          if (downloaded === totallength) {
            const tg = new ThumbnailGenerator({
              sourcePath: path.join(
                __dirname,
                `../../uploads/${data.name}.mp4`
              ),
              thumbnailPath: path.join(__dirname, "../../uploads/thumbs/")
            });
            tg.generateOneByPercent(10, {
              size: "100%",
              filename: `${data.name}_1`
            }).then(console.log);
            tg.generateOneByPercent(50, {
              size: "100%",
              filename: `${data.name}_2`
            }).then(console.log);
            tg.generateOneByPercent(90, {
              size: "100%",
              filename: `${data.name}_3`
            }).then(console.log);
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
