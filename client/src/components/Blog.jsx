import React from "react";
import SmallBanner from "./SmallBanner";
import BlogCards from "./BlogCards";

const Blog = ({ mode }) => {
  let title = "Blogs";

  return (
    <div>
      <SmallBanner title={title} />
      <BlogCards mode={mode} />
    </div>
  );
};

export default Blog;
