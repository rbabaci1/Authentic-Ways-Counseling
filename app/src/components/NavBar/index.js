import React from "react";
import { Link } from "react-scroll";

import "./navBar.scss";

export default function NavBar() {
  return (
    <div className="navBar">
      <Link to="home" smooth={true} duration={400}>
        HOME
      </Link>
      <Link to="about" smooth={true} duration={600}>
        ABOUT ME
      </Link>
      <Link to="help" smooth={true} duration={600}>
        HOW I HELP
      </Link>
      <Link to="resources" smooth={true} duration={600}>
        RESOURCES
      </Link>
      <Link to="contact" smooth={true} duration={600}>
        CONTACT
      </Link>
    </div>
  );
}
