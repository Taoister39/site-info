import cssStyles from "./index.module.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import TrackVisibility from "react-on-screen";

import headerImg from "@/assets/img/header-img.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useEffect, useState } from "react";

const Banner = () => {
  const toTextRotate = ["Web Developer", "Miku Fans", "JavaScript Fans"];
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [inputText, setInputText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      typerAnimation();
    }, delta);

    return () => clearInterval(ticker);
  }, [inputText]);

  const typerAnimation = () => {
    const i = loopNum % toTextRotate.length;
    const fullText = toTextRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, inputText.length - 1)
      : fullText.substring(0, inputText.length + 1);

    setInputText(updatedText);
    // 删除时
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    // 添加满时
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period); // 周期
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className={cssStyles["banner"]} id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            {/* 是否在荧幕上可见 */}
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className={cssStyles["tagline"]}>
                    welcome to my web site
                  </span>
                  <h1 className={cssStyles["my-title"]}>
                    Hi! I'm Taoister{" "}
                    <span className={cssStyles["txt-rotate"]}>
                      <span className={cssStyles["wrap"]}>{inputText}</span>
                    </span>
                  </h1>
                  <p className={cssStyles["my-info"]}>
                    This is my second website, thanks for watching. Technically,
                    React + Bootstrap is mainly used, which is very convenient
                    to make the desired UI program. I am a Hatsune Miku fan, and
                    I will show my favorite typography content.
                  </p>
                  <button className={cssStyles["button"]}>
                    Let's Connect{" "}
                    <ArrowRightCircle className={cssStyles["icon"]} size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <Image
                    className={cssStyles["header-img"]}
                    src={headerImg}
                    fluid
                    alt="Header Img"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
