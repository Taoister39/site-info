import NewsLetter from "@/components/Footer/NewsLetter";
import { Col, Container, Image, Row } from "react-bootstrap";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import cssStyles from "./index.module.css";

import logo from "@/assets/img/logo.png";
import navIcon1 from "@/assets/img/nav-icon1.svg";
import navIcon2 from "@/assets/img/nav-icon2.svg";
import navIcon3 from "@/assets/img/nav-icon3.svg";

const Footer = () => {
  const postUrl = "";
  return (
    <footer className={cssStyles["footer"]}>
      <Container>
        <Row>
          <MailchimpSubscribe
            url={postUrl}
            render={({ subscribe, status, message }) => (
              <NewsLetter
                status={status}
                message={message}
                onValidated={(fromData) => subscribe(fromData)}
              />
            )}
          />
          <Col sm={6}>
            <Image src={logo} className={cssStyles["logo"]} fluid alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
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
            <p className={cssStyles["info"]}>
              Copyright 2022. All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
