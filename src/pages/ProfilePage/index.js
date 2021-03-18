import React, { useState } from "react";
import { auth } from "../../firebase";
import { Button, Grid, Avatar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core';
import "./style.css";

const useStyles = makeStyles({
    img: {
        width: "10rem",
        height: "10rem",
    },
    editButton: {
        display: "inline",
    },
    active:{
        borderBottom: "1px solid black",
    }
});

function ProfilePage(){
    const [active, setActive] = useState(["active", "", ""]);

    var user = auth.currentUser;
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
        <div id = "profile-page">
        <div id = "Profile-details">  
            <div id = "profile-img" >
                <Avatar className={classes.img} src = {photoUrl}></Avatar>
            </div>          
            <div>
                <div >
                    <Grid container direction = "row">
                        <Grid item>
                            <h2 id = "username">{username}</h2>
                        </Grid>
                        <Grid item>
                            <div >
                                <Button className = {classes.editButton}>Edit Profile</Button>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div>
                    {/* dummy data */}
                    10 posts 100 followers 200 following
                </div>
                <div>
                    <h3>{name}</h3>
                </div>
                <div>
                    bio
                </div>
            </div>    
        </div>
        <div id = "content-head">
                <ul id = "content-head-list">
                    <li onClick = {() => setActive(["active", "", ""])} className = { active[0] }>
                        Posts
                    </li>
                    <li onClick = {() => setActive(["", "active", ""])} className={ active[1] }>
                        Saved
                    </li>
                    <li onClick = {() =>setActive(["", "", "active"])} className={ active[2] }>
                        Tagged
                    </li>
                </ul>
                <hr ></hr>
            </div>
        </div>
    );
}

export default ProfilePage;