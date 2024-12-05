import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Projects() {
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

      <div className="container my-5">
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
      </div>

      <div className="container" style={{ paddingTop: "50px" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Projects;
