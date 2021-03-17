import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Input,
  TextField,
  Box,
  LinearProgress,
} from "@material-ui/core";
import { storage, db } from "../../firebase";
import firebase from "firebase";

import styles from "./style";

const useStyles = makeStyles(styles);

function Uploadpage({ username }) {
  const classes = useStyles();
  const [image, setImage] = useState(null);
  // const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              username: username,
            });

            setProgress(0);
            setCaption("");
            setImage(null);
          });
      }
    );
  };

  return (
    <div className={classes.uploadPage}>
      <label htmlFor="contained-button-file">
        <Box className={classes.uploadArea}>
          <span>Click or Drag and Drop to upload Image</span>
        </Box>
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
          className={classes.input}
        />
      </label>
      <label className={classes.caption}>
        <TextField
          label="Caption"
          variant="filled"
          placeholder="Enter a caption..."
          onChange={(e) => setCaption(e.target.value)}
          value={caption}
          className={classes.captionInput}
        />
      </label>
      <label className={classes.upload}>
        <Button onClick={handleUpload} className={classes.uploadBtn}>
          Upload
        </Button>
      </label>
      <LinearProgress
        className={classes.progressBar}
        variant="determinate"
        value={progress}
      />
    </div>
  );
}

export default Uploadpage;
