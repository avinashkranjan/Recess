import React from "react";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import AddToPhotosRoundedIcon from "@material-ui/icons/AddToPhotosRounded";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export const SideBarData = [
  {
    title: "Home",
    icon: <HomeRoundedIcon />,
    link: "/home",
  },
  {
    title: "Upload",
    icon: <AddToPhotosRoundedIcon />,
    link: "/upload",
  },
  {
    title: "Profile",
    icon: <AccountCircleIcon />,
    link: "/profile",
  },
];
