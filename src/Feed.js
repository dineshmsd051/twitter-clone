import React, { useEffect, useState } from 'react';
import "./Feed.css";
import TweetBox from './TweetBox';
import Post from './Post';
import db from "./firebase"
import {
  doc,
  onSnapshot,
  collection,
  query,
  where
} from "firebase/firestore";

function Feed() {
  const [posts, setPosts] = useState([])


useEffect(() => {
  const postsRef = query(collection(db, "posts"));
  const unsubscribe = onSnapshot(postsRef, (snapshot) => {
    const posts = snapshot.docs.map((snapshotData) => snapshotData.data());
    setPosts(posts);
  });

  return () => unsubscribe();
}, []);


  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />
      {posts?.map((post) => (
        <div key={post.id}>
          <Post
            avatar={post.avatar}
            displayName={post.displayName}
            userName={post.userName}
            isVerified={post.isVerified}
            text={post.text}
            image={post.image}
          />
        </div>
      ))}
    </div>
  );
}

export default Feed