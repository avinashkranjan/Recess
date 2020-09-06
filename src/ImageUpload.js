import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { storage, db } from "./firebase";
import firebase from "firebase";

function ImageUpload({ username }) {
  const [image, setImage] = useState(null);
  // const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState(" ");

  const handleChange = (e) => {
    if (e.target.fies[0]) {
      setImage(e.target.fies[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref("images/$(images.name)").put(image);

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
          .child("images.name")
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              timestamp: firebase.firestone.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              username: username,
            });
          });
      }
    );

    return (
      <div>
        <input
          type="text"
          placeholder="Enter a Caption.."
          onChange={(event) => setCaption}
          value
        />
        <input type="file" onChange={handleChange} />
        <Button onClick={handleUpload}>Upload</Button>
      </div>
    );
  };
}

export default ImageUpload;
