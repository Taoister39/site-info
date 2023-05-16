import ProjectCard from "@/components/Projects/ProjectCard";
import {
  Carousel,
  Col,
  Container,
  Image,
  Nav,
  Pagination,
  Row,
  Tab,
} from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import cssStyles from "./index.module.css";

import projImg1 from "@/assets/img/miku-img1.jpg";
import projImg2 from "@/assets/img/miku-img2.jpg";
import projImg3 from "@/assets/img/miku-img3.jpg";

import mikuImg1 from "@/assets/img/miku-p1.jpg";
import mikuImg2 from "@/assets/img/miku-p2.jpg";
import mikuImg3 from "@/assets/img/miku-p3.jpg";

const Projects = () => {
  /**
   * @type {{title:string,description:string,imgUrl:string} []}
   */
  const projects = [
    {
      title: "my miku is so cute",
      description: "xperia feat. hatsune miku",
      imgUrl: projImg1,
    },
    {
      title: "my miku is so lively",
      description: "xperia feat. hatsune miku",
      imgUrl: projImg2,
    },
    {
      title: "my miku is so handsome",
      description: "xperia feat. hatsune miku",
      imgUrl: projImg3,
    },
    {
      title: "my miku is so cute",
      description: "xperia feat. hatsune miku",
      imgUrl: projImg1,
    },
    {
      title: "my miku is so lively",
      description: "xperia feat. hatsune miku",
      imgUrl: projImg2,
    },
    {
      title: "my miku is so handsome",
      description: "xperia feat. hatsune miku",
      imgUrl: projImg3,
    },
  ];
  return (
    <section id="projects" className={cssStyles["project"]}>
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 className={cssStyles["title"]}>Projects</h2>
                  <p>
                    I want to store more miku photos. At the same time, I hope
                    there will be more creative textures or text.
                  </p>
                  <Tab.Container defaultActiveKey="first">
                    {/* 填色焦点样式 */}
                    <Nav
                      variant="pills"
                      className={
                        cssStyles["nav-pills"] +
                        " mb-5 justify-content-center align-items-center"
                      }
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      className={
                        isVisible ? "animate__animated animated__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        {/* 网格间距 */}
                        <Row className="g-4">
                          {projects.map((item, index) => (
                            <ProjectCard key={index} {...item} />
                          ))}
                          <Col xs={12} className="d-flex justify-content-end">
                            <Pagination size="lg">
                              <Pagination.Prev />
                              {Array.from({ length: 3 }).map((item, index) => (
                                <Pagination.Item
                                  key={index}
                                  active={index + 1 === 1}
                                >
                                  {index + 1}
                                </Pagination.Item>
                              ))}
                              <Pagination.Next />
                            </Pagination>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Miku with me.You're so beauty.</p>
                        <Carousel className="p-5">
                          <Carousel.Item>
                            <Image src={mikuImg1} fluid />
                          </Carousel.Item>
                          <Carousel.Item>
                            <Image src={mikuImg2} fluid />
                          </Carousel.Item>
                          <Carousel.Item>
                            <Image src={mikuImg3} fluid />
                          </Carousel.Item>
                        </Carousel>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          I hope that one day I can compete in an ICPC
                          competition, which will be the highest honor in my
                          student days.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
