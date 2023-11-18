import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    // <div className="col-3">
    <div className="blog-card">
      <div className="card-image">
        <img src="/images/blog-1.jpg" alt="blog" className="img-fluid w-100" />
      </div>
      <div className="blog-content">
        <p className="date">1 Dec, 2022</p>
        <h5 className="title text-truncate">
          A beautiful sunday morning renaissance
        </h5>
        <p className="desc">
          You’re only as good as your last collection, which is an enormous
          pressure. I think there is something about luxury...
        </p>
        <Link to="/blog/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
    // </div>
  );
};

export default BlogCard;
