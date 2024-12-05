import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { blogsData } from "./BlogPosts";

function Posts() {
  const [searchQuery, setSearchQuery] = useState("");
 

  const filteredPosts = blogsData.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar />

      <div className="container my-5">
        <div className="container col-lg-4">
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="container col-lg-8 py-4">
          {filteredPosts.map((post, index) => (
            <div className="container my-4" key={index}>
              <div className="d-flex flex-column align-items-start mb-2">
                <p className="fw-bold">
                  <Link to={post.link} className="text-decoration-none">
                    {post.title}
                  </Link>
                </p>
                <p className="text-secondary">{post.description}</p>
              </div>
              <p className="text-secondary fw-light">{post.date}</p>
            </div>
          ))}

          {filteredPosts.length === 0 && (
            <p className="text-secondary text-center">No posts found.</p>
          )}

          <h5 className="mt-2">
            <Link to="/" className="text-secondary">
              All posts
            </Link>
          </h5>
        </div>
      </div>

      <div className="container" style={{ paddingTop: "50px" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Posts;
