import React from "react";
import b1 from "../assets/b1.jpg";
import "../App.css";

const BlogCards = (props) => {
  const Blogs = [
    {
      id: 1,
      title: "Blog 1",
      description: "This is the first blog post",
    },
    {
      id: 2,
      title: "Blog 2",
      description: "This is the second blog post",
    },
    {
      id: 3,
      title: "Blog 3",
      description: "This is the third blog post",
    },
    {
      id: 4,
      title: "Blog 4",
      description: "This is the fourth blog post",
    },
  ];

  return (
    <div className={`bg-${props.mode} cardone`}>
      <div className="container py-5">
        <div className="row">
          {Blogs.map((blog) => (
            <div className="col-md-3">
              <div className={`card bg-${props.mode}`}>
                <img
                  src={b1}
                  className="card-img-top"
                  alt="..."
                />
                <div className={`text-${props.mode === "light" ? "dark" : "light"} cardbody text-center py-3`}>
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">{blog.description}</p>
                  <a
                    href="#"
                    className={`btn btn-${props.mode === "light" ? "dark" : "light"}`}
                  >
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
