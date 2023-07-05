import React from 'react';
import "./TweetBox.css"
import { Avatar, Button } from '@mui/material';

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="" />
          <input type="text" placeholder="what's happening?" />
        </div>
        <input
          className="tweetBox__imageInput"
          type="text"
          placeholder="Optional: Enter Image URL"
        />
        <div className="tweetBox__tweetButton_wrapper">
          <Button className="tweetBox__tweetButton">Tweet</Button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox