import React from "react";
import SmallBanner from "../components/SmallBanner";
import BlogCards from "../components/BlogCards";
import PaginatedBlogCards from "../components/PaginatedBlogCards";

const Blog = ({ mode }) => {
  return (
    <>
      <SmallBanner title="Blogs" />
      <BlogCards mode={mode} />
    </>
  );
};

export default Blog;
