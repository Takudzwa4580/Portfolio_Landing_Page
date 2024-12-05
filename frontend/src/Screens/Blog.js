import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { blogsData } from "./BlogPosts";

const Blog = () => {
  const { blogId } = useParams();

  const blog = blogsData.find((blog) => blog.id === blogId);

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <div>
      <Navbar />

      <div className=" text-center " style={{ paddingTop: "50px" }}>
        <img
          src={blog.image}
          alt={blog.title}
          className="img-fluid rounded border border-dark mb-4"
          style={{ maxWidth: "60%" }}
        />
        <h1>{blog.title}</h1>
        <p className="text-secondary">{blog.description}</p>
      </div>

      <div className="container col-lg-8 mb-5">
        <div className="container   text-center" style={{ paddingTop: "30px" }}>
          <p>
            <strong>Page Link: </strong>
            <a href={blog.site} target="_blank" rel="noopener noreferrer">
              {blog.title} 
            </a>
          </p>
          <p>
            <strong>Created On: </strong>
            {blog.date}
          </p>
        </div>

        <div className="container " style={{ paddingTop: "50px" }}>
          <h2>Tech Stack Used</h2>
          <ul className="text-secondary">
            {blog.techStack.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="container " style={{ paddingTop: "50px" }}>
          <h2>Our Services</h2>
          <ul className="text-secondary">
            {blog.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>

        <div className="container " style={{ paddingTop: "50px" }}>
          <h2>Key Features</h2>
          <ul className="text-secondary">
            {blog.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="container " style={{ paddingTop: "50px" }}>
          <h2>How It Works</h2>
          <ol className="text-secondary">
            {blog.howItWorks.map((step, index) => (
              <li key={index}>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </div>

        <div className="container " style={{ paddingTop: "50px" }}>
          <h2>Why Choose Us?</h2>
          <ul className="text-secondary">
            {blog.whyChooseUs.map((reason, index) => (
              <li key={index}>
                <strong>{reason}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
