import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import "./navBar.scss";

export default function NavBar() {
  return (
    <div className="navBar">
      <div className="logo">
        <img
          src="https://cdn.pixabay.com/photo/2020/06/23/21/38/purple-5333959__480.jpg"
          alt="logo"
        />
        <div className="business-name">
          <h1>NANCY OLIVIER</h1>
          <h4>AUTHENTIC WAYS COUNSELING</h4>
        </div>
      </div>

      <div className="desktop">
        <button
          onClick={() =>
            scroll.scrollToTop({
              duration: 400,
            })
          }
        >
          HOME
        </button>

        <Link to="about" spy={true} smooth={true} duration={600}>
          ABOUT ME
        </Link>

        <Link to="help" spy={true} smooth={true} duration={600}>
          HOW I HELP
        </Link>

        <Link to="resources" spy={true} smooth={true} duration={600}>
          RESOURCES
        </Link>

        <Link to="contact" spy={true} smooth={true} duration={600}>
          CONTACT
        </Link>
      </div>
    </div>
  );
}
