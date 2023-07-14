import React, { useState } from 'react';
import "./TweetBox.css"
import { Alert, Avatar, Button } from '@mui/material';
import db from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState("")
  const [tweetImage, setTweetImage] = useState("");
  const [error, setError] = useState("");

  const generateRandomHexColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
  };

  const handleTweet = async () => {

    setError("")
    if ((!tweetMessage || tweetMessage === "" ) && (!tweetImage || tweetImage === "")) {
      setError("Tweet or Tweet Image URL is Required!")
      return
    }

    const postsRef = collection(db, "posts");

    const tweetData = {
      avatar:
        "https://lh3.googleusercontent.com/ogw/AGvuzYb8DRiIPejMPPcjgAi4JL_RH99W0ZXmSfZLAwwkNw=s32-c-mo",
      displayName: "Dinesh Msd",
      id: generateRandomHexColor(),
      image: tweetImage,
      isVerified: true,
      text: tweetMessage,
      userName: "dineshmsd051",
      createdAt: serverTimestamp(),
    };

    try {
      const result = await addDoc(postsRef, tweetData);
    } catch (error) {
      console.log(error);
    }
    setTweetMessage("")
    setTweetImage("")
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="" />
          <input
            type="text"
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="what's happening?"
          />
        </div>
        <input
          className="tweetBox__imageInput"
          type="text"
          placeholder="Optional: Enter Image URL"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <div className="tweetBox__tweetButton_wrapper">
          <Button className="tweetBox__tweetButton" onClick={handleTweet}>
            Tweet
          </Button>
        </div>
        <div style={{padding: '10px 20px'}}>{error && <Alert severity="error">{error}</Alert>}</div>
      </form>
    </div>
  );
}

export default TweetBox