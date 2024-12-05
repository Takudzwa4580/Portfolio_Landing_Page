import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container d-flex justify-content-center">
      <div className="col-lg-8 col-md-12 col-12 py-3 d-flex justify-content-between align-items-center">
        <span className="fs-1 ms-3">
          <Link to="/" className="text-secondary text-decoration-none">
            🥷
          </Link>
        </span>

        <div className="col-6   d-flex justify-content-between text-secondary">
          <div>
            <p className="">
              <Link to="/posts" className="text-secondary text-decoration-none">
                Posts
              </Link>
            </p>
          </div>
          <div>
            <p className="mx-2">
              <Link
                to="/projects"
                className="text-secondary text-decoration-none"
              >
                Projects
              </Link>
            </p>
          </div>
          <div>
            <p className="">
              <Link
                to="/contact"
                className="text-secondary text-decoration-none"
              >
                Contact
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
