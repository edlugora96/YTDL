import { useState } from "react";
import { useInputValue } from "$utils/hooks";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import connect from "$redux/connect";
import { GridList, GridListTile, Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";

const send = (data, props) => {
  props.setLoading(true);
  fetch("/api/ytdl", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(r => {
    props.setVideoInfo(r);
    props.setLoading(false);
    console.log(r);
  });
};

const Home = props => {
  const url = useInputValue();
  const name = useInputValue();
  const [loading, setLoading] = useState(false);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <GridList cols={2}>
      <GridListTile actionPosition={"left"}>
        <form>
          <h3>Donwload video from Youtube</h3>
          <label>
            Youtube Url
            <TextField
              id="YoutubeUrl"
              value={url.value}
              onChange={url.onChange}
            />
          </label>
          <label>
            Name of video
            <TextField
              id="YoutubeName"
              value={name.value}
              onChange={name.onChange}
            />
          </label>
          <Button
            primary={true}
            onClick={() =>
              send(
                { url: url.value, name: name.value },
                { loading, setLoading, ...props }
              )
            }
          >
            Start
          </Button>
        </form>
      </GridListTile>
      <GridListTile actionPosition={"right"}>
        <GridList cols={1}>
          {props.youtube && (
            <div>
              <GridListTile>
                <img src={`/media/thumbs/${name}_1.png`} />
              </GridListTile>
              <GridListTile>
                <img src={`/media/thumbs/${name}_2.png`} />
              </GridListTile>
              <GridListTile>
                <img src={`/media/thumbs/${name}_3.png`} />
              </GridListTile>
              <GridListTile>
                <a href={`/media/${name}.mp4`}>Mp4 Video Link</a>
              </GridListTile>
            </div>
          )}
        </GridList>
      </GridListTile>
    </GridList>
  );
};

export default connect(Home);
