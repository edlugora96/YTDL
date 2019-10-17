import { useState, useEffect } from "react";
import { useInputValue } from "$utils/hooks";
import { subscribeVideoLoaded, subscribeChumkVideoLoaded } from "$utils/socket";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import connect from "$redux/connect";
import {
  Grid,
  GridList,
  GridListTile,
  Button,
  Typography,
  TextField,
  Box,
  CircularProgress
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

const send = (data, props) => {
  props.setLoading(true);
  props.setLoadingValue(0);
  props.setVideoInfo(null);
  fetch("/api/ytdl", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(r => {});
};

const Home = props => {
  const url = useInputValue();
  const name = useInputValue();
  const [loading, setLoading] = useState(false);
  const [loadingValue, setLoadingValue] = useState(0);
  useEffect(() => {
    subscribeVideoLoaded((err, data) => {
      props.setVideoInfo(data);
      setLoading(false);
    });
    subscribeChumkVideoLoaded((err, data) => {
      setLoadingValue((data.downloaded * 100) / data.totallength);
    });
  }, []);
  return (
    <div>
      {loading && (
        <div>
          <LinearProgress variant="determinate" value={loadingValue} />
          <br />
        </div>
      )}

      <Grid
        container={true}
        alignContent="center"
        alignItems="center"
        justify="center"
        sm="auto"
        md="auto"
        lg="auto"
        spacing={1}
      >
        <Grid
          alignContent="center"
          alignItems="center"
          justify="center"
          item={true}
        >
          <Box minHeight="100vh">
            <center>
              <Typography variant="h4" component="h1">
                Donwload video from Youtube
              </Typography>

              <br />
              <TextField
                label="Youtube Url"
                id="YoutubeUrl"
                value={url.value}
                onChange={url.onChange}
                required
                variant="filled"
              />
              <br />
              <br />
              <TextField
                label="Name of video"
                id="YoutubeName"
                value={name.value}
                onChange={name.onChange}
                required
                variant="filled"
              />
              <br />
              <br />
              <Button
                disabled={
                  name.value && url.value ? (loading ? true : false) : true
                }
                variant="contained"
                color="primary"
                onClick={() => {
                  if (name.value && url.value && !loading) {
                    send(
                      { url: url.value, name: name.value },
                      { loading, setLoading, setLoadingValue, ...props }
                    );
                  }
                }}
              >
                {loading ? <CircularProgress color="secondary" /> : "Start"}
              </Button>
            </center>
          </Box>
        </Grid>
        {props.youtube && (
          <Grid
            alignContent="center"
            alignItems="center"
            justify="center"
            item={true}
          >
            <div>
              <img src={`/media/thumbs/${name.value}_1.png`} />
              <br />
              <img src={`/media/thumbs/${name.value}_2.png`} />
              <br />
              <img src={`/media/thumbs/${name.value}_3.png`} />
              <br />
              <Button
                variant="contained"
                color="primary"
                href={`/media/${name.value}.mp4`}
              >
                Mp4 Video Link
              </Button>
            </div>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default connect(Home);
