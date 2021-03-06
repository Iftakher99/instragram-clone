import React from "react";
import "./post.css";
import Avatar from "@material-ui/core/Avatar";
function Post({ username, caption, imageUrl }) {
  return (
    <div className='post'>
      <div className='post__header'>
        <Avatar
          className='post__avatar'
          alt='iftakher Mahmud'
          src='/static/images/avatar/1.jpg'
        />
        <h3>{username}</h3>
      </div>
      {/* header->avatar+username*/}
      <img className='post__image' src={imageUrl} />
      <h4 className='post__text'>
        {" "}
        <strong> {username}</strong> {caption}
      </h4>
      {/* image */}
      {/* username+caption */}
    </div>
  );
}

export default Post;
