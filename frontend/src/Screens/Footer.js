import React from "react";
import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className=" container col-lg-8 d-flex justify-content-between align-items-top ">
      <div>
        <FaLinkedin className="fs-3 mx-2" />
        <FaGithub className="fs-3 mx-2" />
        <FaInstagramSquare className="fs-3 mx-2" />
      </div>
      <div>
        <span className="text-secondary " style={{fontSize:"15px"}}>
          @2024 Takudzwa Mumvanga. All rights reserved.
        </span>
      </div>
    </div>
  );
}

export default Footer;
