import React, { useState } from "react";
import { Button, Input,Card, CardContent, Typography,CardMedia,CardActions,CircularProgress} from "@material-ui/core";
import { storage, db } from "./firebase";
import firebase from "firebase";

import PhotoCamera from '@material-ui/icons/PhotoCamera';
import "./ImageUpload.css";

import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
  root: {
      width:750,
      margin: '40px auto',
  },
  pos: {
      marginBottom: 12,
  },
  action:
  {
      width:109,
      margin:"10px auto"
  },
  media: {
      height: 0,
      paddingTop: '56.25%',
    },

  inp:{ 
      width: "90%", 
      margin: "10px auto", 
      padding: "10px" 
  }

});


function ImageUpload({ username }) {


  const [image, setImage] = useState(null);
  // const [url, setUrl] = useState("");
  const [upload,setUpload]=useState(false);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");
  const [file,setFile]=useState(null);
  

 const classes=useStyles();
  

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  };


  const handleUpload = () => {

    setUpload(true);
    console.log(image)
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
            setUpload(false);
            setFile(null);
          });
      }
    );
  };

  return (

    //Upload Form UI changed
    <Card className="imageupload">
      <CardContent>
        <Typography variant="h5" style={{textAlign:'center',marginBottom:'10px'}}>Add Post</Typography>
        <form>
        <Input
        type="text"
        placeholder="Enter a caption.."
        onChange={(e) => setCaption(e.target.value)}
        value={caption}
      />
      <br/>
        <Input style={{display:"none"}}
                        id="contained-button-file"
                        multiple 
                        onChange={handleChange}
                        type="file"
                    /> 
                    <label htmlFor="contained-button-file">
                        {!image && !file?
                        <Button variant="contained" color="primary" 
                        component="span" startIcon={<PhotoCamera />}
                        color="primary">
                            Upload
                        </Button>:<Button variant="contained" color="primary"
                        component="span" startIcon={<PhotoCamera />}
                        color="primary">
                            Change
                        </Button>}

                        <br/>

                        {file?<Card style={{width:'80%',margin:"0 auto"}}>
                            <CardMedia
                            className={classes.media}
                            image={file}/>
                          </Card>:''}
                    </label>
                    
                </form>


                {upload?<progress className="imageupload__progress" value={progress} max="100" />:''}


            </CardContent>
            <CardActions className={classes.action}>
                <Button type="submit"
                    style={{ textTransform: "capitalize", fontSize: "17px"}}
                    variant="contained" color="primary"
                    onClick={handleUpload}>
                        Add Post</Button>
            </CardActions>
            
        </Card>

    // <div className="imageupload">
    //   {uplaod?<progress className="imageupload__progress" value={progress} max="100" />:""}
    //   
    //   <Input type="file" onChange={handleChange} />
    //   <Button variant="container" color="primary">Upload Image</Button>
    //   <Button onClick={handleUpload}>Add Post</Button>
    // </div>
  );
}

export default ImageUpload;
