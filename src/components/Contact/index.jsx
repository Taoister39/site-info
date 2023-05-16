import {
  Col,
  Container,
  Form,
  Image,
  Row,
  Modal,
  Table,
  ListGroup,
} from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import cssStyles from "./index.module.css";

import contactImg from "@/assets/img/contact-img.svg";
import { useState } from "react";

const Contact = () => {
  const [show, setShow] = useState(false);
  const [formFields, setFormFields] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    phone_number: "",
    text: "",
  });

  /**
   * @param {Event} event
   */
  const onSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    setShow(true);
  };

  return (
    <>
      <section id="connect" className={cssStyles["contact"]}>
        <Container>
          <Row>
            <Col md={6}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <Image
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                    src={contactImg}
                    alt="Contact Us"
                    fluid
                  />
                )}
              </TrackVisibility>
            </Col>
            <Col md={6}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <Form onSubmit={onSubmit}>
                    <h2 className={cssStyles["form-title"]}>Get In Touch</h2>
                    <Row>
                      <Col sm={6} className="px-1">
                        <Form.Control
                          name="first_name"
                          placeholder="First Name"
                          value={formFields.first_name}
                          onChange={(event) =>
                            setFormFields((state) => ({
                              ...state,
                              first_name: event.target.value,
                            }))
                          }
                          type="text"
                        />
                      </Col>
                      <Col sm={6} className="px-1">
                        <Form.Control
                          name="last_name"
                          placeholder="Last Name"
                          type="text"
                          value={formFields.last_name}
                          onChange={(event) =>
                            setFormFields((state) => ({
                              ...state,
                              last_name: event.target.value,
                            }))
                          }
                        />
                      </Col>
                      <Col sm={6} className="px-1">
                        <Form.Control
                          name="email_address"
                          placeholder="Email Address"
                          type="text"
                          value={formFields.email_address}
                          onChange={(event) =>
                            setFormFields((state) => ({
                              ...state,
                              email_address: event.target.value,
                            }))
                          }
                        />
                      </Col>
                      <Col sm={6} className="px-1">
                        <Form.Control
                          name="phone_number"
                          placeholder="Phone No."
                          type="text"
                          value={formFields.phone_number}
                          onChange={(event) =>
                            setFormFields((state) => ({
                              ...state,
                              phone_number: event.target.value,
                            }))
                          }
                        />
                      </Col>
                      <Col className="px-1">
                        <Form.Control
                          as="textarea"
                          name="text"
                          placeholder="wrting text"
                          rows={3}
                          value={formFields.text}
                          onChange={(event) =>
                            setFormFields((state) => ({
                              ...state,
                              text: event.target.value,
                            }))
                          }
                        />
                        <button
                          className={cssStyles["submit"]}
                          variant="primary"
                          type="submit"
                        >
                          <span>Send</span>
                        </button>
                      </Col>
                    </Row>
                  </Form>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>

      <Modal
        // className="bg-dark"
        size="lg"
        show={show}
        onHide={() => {
          setShow(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">
            This is fill form for you.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table bordered striped hover responsive>
            <thead>
              <tr>
                <th>first_name</th>
                <th>last_name</th>
                <th>email_address</th>
                <th>phone_number</th>
                <th>text</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{formFields.first_name}</td>
                <td>{formFields.last_name}</td>
                <td>{formFields.email_address}</td>
                <td>{formFields.phone_number}</td>
                <td>{formFields.text}</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center align-items-center">
          <ListGroup>
            <ListGroup.Item>good study</ListGroup.Item>
            <ListGroup.Item>day up</ListGroup.Item>
          </ListGroup>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Contact;
