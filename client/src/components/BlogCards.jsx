import React, { useEffect, useState } from "react";
import b1 from "../assets/blog/blog-1.jpg";
import b2 from "../assets/blog/blog-2.jpg";
import b3 from "../assets/blog/blog-3.jpg";

import "../App.css";
import Button from "./Button";

const BlogCards = ({ mode }) => {
  const Blogs = [
    {
      id: 1,
      title: "Blog 1",
      description: "This is the first blog post",
      img: b1,
    },
    {
      id: 2,
      title: "Blog 2",
      description: "This is the second blog post",
      img: b2,
    },
    {
      id: 3,
      title: "Blog 3",
      description: "This is the third blog post",
      img: b3,
    },
    {
      id: 4,
      title: "Blog 4",
      description: "This is the fourth blog post",
      img: b1,
    },
  ];

  const [news, setnews] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log("This is data from api", data);
    setnews(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className={`bg-${mode} pb-4`}>
        <div className="container py-5">
          <div className="row">
            <h4 className={`text-${mode === "light" ? "dark" : "light"} fs-2 fw-bold text-center`}>Out Latest Blogs</h4>
            <h4 className={`text-${mode === "light" ? "dark" : "light"} mb-5 text-center`}>{news.title}</h4>
            {Blogs.map((blog) => (
              <div className="col-md-3">
                <div className={`card bg-${mode}`}>
                  <img
                    src={blog.img}
                    className="card-img-top"
                    alt=".Blog Image"
                  />
                  <div className={`text-${mode === "light" ? "dark" : "light"} cardbody text-center py-3`}>
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">{blog.description}</p>
                    <Button
                      mode={mode}
                      text="Read More"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCards;
