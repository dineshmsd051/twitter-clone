import React from 'react';
import "./Post.css";
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

function Post({
    avatar,
    displayName,
    userName,
    isVerified,
    text,
    image,
}) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h4>
              {displayName}
              {isVerified && (
                <span>
                  <VerifiedIcon className="post__verifiedBadge" />{" "}
                </span>
              )}
              <span className="post__username">@{userName}</span>
            </h4>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <div className="post__imageContainer">
          <img src={image} alt="post-attachment" />
        </div>
        <div className="post__footer">
          <ChatBubbleOutlineOutlinedIcon fontSize="20px" />
          <RepeatOutlinedIcon fontSize="20px" />
          <FavoriteBorderOutlinedIcon fontSize="20px" />
          <EqualizerOutlinedIcon fontSize="20px" />
          <FileUploadOutlinedIcon fontSize="20px" />
        </div>
      </div>
    </div>
  );
}

export default Post