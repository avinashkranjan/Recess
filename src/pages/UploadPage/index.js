import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  // const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      readURL(e.target);
    }
  };

  const handleUpload = () => {
    if (image?.name) {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          //progress function ...
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);

          if (snapshot.bytesTransferred === snapshot.totalBytes) {
            history.replace("/home");
          }
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
    }
  };

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      console.log("Loading Image preview...");
      reader.onload = function () {
        var dataURL = reader.result;
        setImagePreview(dataURL);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  return (
    <div className={classes.uploadPage}>
      {!image && (
        <label htmlFor="contained-button-file">
          <Box className={classes.uploadArea}>
            <span className={classes.text}>Click to upload Image</span>
          </Box>
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            className={classes.input}
            onChange={handleChange}
          />
        </label>
      )}
      {image && (
        <Box className={classes.uploadArea}>
          <img
            src={imagePreview}
            className={classes.imagePreview}
            alt="User uploaded file"
          />
        </Box>
      )}
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
