import React from "react";
import Header from "../hompage/header/Header";
import PostViewBanner from "./PostViewBanner";
import PostViewContent from "./PostViewContent";

function PostView() {
  return (
    <>
      <Header />
      <PostViewBanner />
      <PostViewContent />
    </>
  );
}

export default PostView;
