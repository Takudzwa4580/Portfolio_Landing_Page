import React from "react";
import Navbar from "./Navbar";
import Profile from "./images/profile-pic.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  const Posts = [
    {
      title: "Overseas Companion",
      date: "December 4, 2024",
      description:
        "A React-based web app designed to help students find their dream universities with enhanced engagement and seamless performance.",
    },
    {
      title: "Overseas Companion Admin",
      date: "November 21, 2024",
      description:
        "An admin dashboard for managing student data, tracking user engagement, and optimizing content to improve university matches.",
    },
  ];

  const Projects = [
    {
      img: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      img: "https://images.pexels.com/photos/9572504/pexels-photo-9572504.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      img: "https://images.pexels.com/photos/9572504/pexels-photo-9572504.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      img: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="py-5 ">

       <div className="container col-lg-8 d-flex flex-column-reverse flex-lg-row justify-content-lg-between align-items-lg-center align-items-sm-start">
  <div className="mt-4 mt-md-0">
    <h2 className="fw-bold">Hi👋 , I'm Takudzwa.</h2>
    <p className="text-secondary my-4">
      I'm a full-stack developer passionate about finance,
      <br />
      entrepreneurship, and startups,
      <br /> specializing in building innovative web and blockchain
      solutions.
    </p>
    <div className="">
      <button className="btn btn-dark">Download CV</button>
    </div>
  </div>

  <img
    src={Profile}
    className="img-fluid"
    style={{ maxWidth: "200px" }}
    alt="Profile"
  />
</div>


      </div>

      <div className="container  col-lg-8 py-4">
        <h2>Recent posts</h2>
        {Posts.map((post, index) => (
          <div className="container  my-4" key={index}>
            <div className="d-flex flex-column align-items-start mb-2">
              <p className="fw-bold">{post.title}</p>
              <p className="text-secondary">{post.description}</p>
            </div>
            <p className="text-secondary fw-light">{post.date}</p>
          </div>
        ))}
        <h5 className="mt-2">
          <Link to="/" className="text-secondary">
            All posts
          </Link>
        </h5>
      </div>

      <div className=" container col-lg-8  py-4 ">
        <h2>Recent Projects</h2>
        <div className="d-flex flex-wrap justify-content-between">
          {Projects.map((project, index) => (
            <div className="card m-3" key={index}>
              <img
                src={project.img}
                className="card-image img-fluid rounded"
                style={{ maxWidth: "350px" }}
                alt={`Project ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <h5 className="mt-2">
          <Link to="/" className="text-secondary">
            All projects
          </Link>
        </h5>
      </div>

      <div className="container col-lg-8 p-4 my-5 ">
        <div className="shadow-sm  border rounded row justify-content-between align-items-center p-4 ">
          <div className="col-md-4 col-lg-7 mb-3 mb-md-0">
            <h2 className="fw-bold">Subscribe to my newsletter </h2>
            <p className="text-secondary">
              Get updates on my work and projects.
            </p>
          </div>
          <div className="col-md-6 col-lg-5">
            <div className="d-flex flex-column align-items-md-stretch gap-3">
              <input placeholder="Email" className="form-control" />
              <button
                className="btn btn-dark w-100"
                style={{ background: "#000", borderColor: "#000" }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
