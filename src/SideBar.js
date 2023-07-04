import React from 'react';
import "./SideBar.css";
import SideBarOption from './SideBarOption';
import HomeIcon from "@mui/icons-material/Home";
import TwitterIcon from "@mui/icons-material/Twitter";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function SideBar() {
  return (
    <div className="sidebar">
      <TwitterIcon />
      <SideBarOption Icon={HomeIcon} text="Home" />
      <SideBarOption Icon={SearchIcon} text="Explore" />
      <SideBarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SideBarOption Icon={MailOutlineIcon} text="Messages" />
      <SideBarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SideBarOption Icon={ListAltIcon} text="Lists" />
      <SideBarOption Icon={PermIdentityIcon} text="Profile" />
      <SideBarOption Icon={MoreHorizIcon} text="More" />
    </div>
  );
}

export default SideBar