import React from "react";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SearchIcon from "@material-ui/icons/Search";
import QuestionAnswerRoundedIcon from "@material-ui/icons/QuestionAnswerRounded";
import NotificationsActiveRoundedIcon from "@material-ui/icons/NotificationsActiveRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import AddToPhotosRoundedIcon from "@material-ui/icons/AddToPhotosRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";

export const SideBarData = [
  {
    title: "Home",
    icon: <HomeRoundedIcon />,
    link: "/home",
  },
  {
    title: "Search",
    icon: <SearchIcon />,
    link: "/Search",
  },
  {
    title: "Message",
    icon: <QuestionAnswerRoundedIcon />,
    link: "/Message",
  },
  {
    title: "Likes",
    icon: <FavoriteRoundedIcon />,
    link: "/Likes",
  },
  {
    title: "Upload",
    icon: <AddToPhotosRoundedIcon />,
    link: "/Upload",
  },
  {
    title: "Notifications",
    icon: <NotificationsActiveRoundedIcon />,
    link: "/Notifications",
  },
  {
    title: "Settings",
    icon: <SettingsRoundedIcon />,
    link: "/Settings",
  },
];
