import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import logo from "@/assets/img/logo.png";
import cssStyles from "./index.module.css";

import navIcon1 from "@/assets/img/nav-icon1.svg";
import navIcon2 from "@/assets/img/nav-icon2.svg";
import navIcon3 from "@/assets/img/nav-icon3.svg";
import { useState, useRef, useEffect } from "react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar
      className={
        cssStyles["navbar"] + " " + (scrolled ? cssStyles["scrolled"] : "")
      }
      expand="lg"
    >
      {/* 响应式 */}
      <Container expand="md">
        {/* 类似logo */}
        <Navbar.Brand className={cssStyles["logo"]}>
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        {/* 用于折叠插件 */}
        <Navbar.Toggle className="bg-dark" aria-controls="basic-navbar-nav" />
        {/* 主体 */}
        <Navbar.Collapse>
          <Nav className={`${cssStyles["nav"]} ms-auto`} id="navbar">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <Navbar.Text className={cssStyles["navbar-text"]}>
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1}></img>
              </a>
              <a href="#">
                <img src={navIcon2}></img>
              </a>
              <a href="#">
                <img src={navIcon3}></img>
              </a>
            </div>
            <a href="#connect">
              <button className={cssStyles["vvd"]}>Let's Connect</button>
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
