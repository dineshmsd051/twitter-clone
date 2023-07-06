import React from 'react';
import "./Feed.css";
import TweetBox from './TweetBox';
import Post from './Post';

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <Post
        avatar="https://lh3.googleusercontent.com/ogw/AGvuzYb8DRiIPejMPPcjgAi4JL_RH99W0ZXmSfZLAwwkNw=s32-c-mo"
        displayName="Dinesh Msd"
        userName="dineshmsd051"
        isVerified={true}
        text="my first tweet"
        image="https://images.unsplash.com/photo-1682685796965-9814afcbff55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      />
    </div>
  );
}

export default Feed