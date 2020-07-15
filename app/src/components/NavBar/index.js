import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import "./navBar.scss";
import logoImg from "../../images/logo.svg";

export default function NavBar() {
  const [navBarStyle, setNavBarStyle] = useState(null);

  useScrollPosition(
    props => {
      const isVisible = props.currPos.y < -10;

      const shouldBeStyle = {
        backgroundColor: `${isVisible ? "#fcf6ec" : "white"}`,
        transition: `all 200ms ${isVisible && "ease-in"}`,
      };

      if (JSON.stringify(shouldBeStyle) === JSON.stringify(navBarStyle)) return;

      setNavBarStyle(shouldBeStyle);
    },
    [navBarStyle]
  );

  return (
    <div className="navBar" style={{ ...navBarStyle }}>
      <div className="logo">
        <img src={logoImg} alt="logo" />

        <div className="business-name">
          <h1>NANCY OLIVIER</h1>
          <p>AUTHENTIC WAYS COUNSELING</p>
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
