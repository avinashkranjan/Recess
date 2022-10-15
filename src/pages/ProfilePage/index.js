import React, { useState } from "react";
import { auth } from "../../firebase";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core';
import "./style.css";

const useStyles = makeStyles({
    img: {
        width: "10rem",
        height: "10rem",
        borderRadius: "50%",
        border: "1px solid black",
        objectFit: "cover",

    },
    editButton: {
        display: "inline",
    },
    active: {
        borderBottom: "1px solid black",
    }
});

function ProfilePage() {
    const [active, setActive] = useState(["active", "", ""]);

    var user = auth.currentUser;
    console.log(user);
    var name, email, photoUrl, split, username;
    //var  uid, emailVerified;

    if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        //emailVerified = user.emailVerified;     
        //uid = user.uid; 

        //using email id to create username
        split = email.split("@");
        username = split[0];
    }

    const classes = useStyles();
    return (
        <div id="profile-page">
            <div id="Profile-details">
                <div id="profile-img" >
                    <img className={classes.img} src={photoUrl} alt="profile" />
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "1rem",
                }}>
                    <Grid container direction="row">
                        <Grid item>
                            <h2 id="username">{name}</h2>
                        </Grid>
                    </Grid>
             
                <p>{username}</p>
                </div>
            </div>
        
                <ul id="content-head-list">
                    <li onClick={() => setActive(["active", "", ""])} className={active[0]}>
                        Posts
                    </li>
                    <li onClick={() => setActive(["", "active", ""])} className={active[1]}>
                        Saved
                    </li>
                    <li onClick={() => setActive(["", "", "active"])} className={active[2]}>
                        Tagged
                    </li>
                </ul>
                <hr/>
        
        </div>
    );
}

export default ProfilePage;