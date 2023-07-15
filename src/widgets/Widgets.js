import React from 'react';
import "./Widgets.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { TwitterTweetEmbed } from "react-twitter-embed";


function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__search">
        <SearchOutlinedIcon className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1675315349573578752"} />

      </div>
    </div>
  );
}

export default Widgets