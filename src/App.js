import logo from "./logo.svg";
import "./App.css";
import Post from "./Post";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "kodu1",
      caption: "Wow its another post",
      imageUrl:
        "https://images.unsplash.com/photo-1619536094780-8ada69185614?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
    },
    {
      username: "kodu1",
      caption: "Wow its another post",
      imageUrl:
        "https://images.unsplash.com/photo-1619525673983-38b379202881?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
      username: "kodu1",
      caption: "Wow its another post",
      imageUrl:
        "https://images.unsplash.com/photo-1619525673983-38b379202881?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
  ]);

  return (
    <div className='app'>
      <div className='app__header'>
        <img
          className='app__headerImage'
          src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
          alt=''
        />
      </div>
      <h1>Hello from home</h1>
      {posts.map((post) => (
        <Post
          username={post.username}
          imageUrl={post.imageUrl}
          caption={post.caption}
        />
      ))}{" "}
    </div>
  );
}

export default App;
