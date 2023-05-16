import cssStyles from "./index.module.css";
import { Container, Row, Col, Image } from "react-bootstrap";
// 没有去用bootstrap的轮播图组件
import Carousel from "react-multi-carousel";

import meter1 from "@/assets/img/meter1.svg";
import meter2 from "@/assets/img/meter2.svg";
import meter3 from "@/assets/img/meter3.svg";

import arrow1 from "@/assets/img/arrow1.svg";
import arrow2 from "@/assets/img/arrow2.svg";

import colorSharp from "@/assets/img/color-sharp.png";

const Skills = () => {
  /**
   * @type {import("react-multi-carousel").CarouselProps["responsive"]}
   */
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablets: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section id="skills" className={cssStyles["skill"]}>
      <Container>
        <Row>
          <Col xs={12}>
            <div className={cssStyles["skill-box"]}>
              <h2>Skills</h2>
              <p>Briefly introduce my technical mastery, I love React.js.</p>
              <Carousel
                infinite={true}
                className={cssStyles["skill-slider"]}
                responsive={responsive}
              >
                <div className={cssStyles["item"]}>
                  <Image src={meter1} alt="Image" fluid />
                  <h5>React</h5>
                </div>
                <div className={cssStyles["item"]}>
                  <Image src={meter2} alt="Image" fluid />
                  <h5>Ant-Design</h5>
                </div>
                <div className={cssStyles["item"]}>
                  <Image src={meter3} alt="Image" fluid />
                  <h5>Node.js</h5>
                </div>
                <div className={cssStyles["item"]}>
                  <Image src={meter2} alt="Image" fluid />
                  <h5>Vue.js</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className={cssStyles["background-image-left"]}
        src={colorSharp}
        alt="Image"
      />
    </section>
  );
};
export default Skills;
