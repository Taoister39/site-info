import { useEffect, useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";
import cssStyles from "./index.module.css";

const NewsLetter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  /**
   * @param {Event} event
   */
  const onSubmit = (event) => {
    event.preventDefault();
    onValidated(email);
  };

  useEffect(() => {
    if (status === "success") {
      setEmail("");
    }
  }, [status]);

  return (
    <Col lg={12}>
      <div className={cssStyles["news-letter"]}>
        <Row>
          <Col lg={12} md={6} xl={5} xs={12}>
            <h3 className={cssStyles["title"]}>
              Subscribe to our Newsletter<br/> & Never miss latest updates
            </h3>
            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7} xs={12}>
            <form onSubmit={onSubmit}>
              <div className={cssStyles["new-email-box"]}>
                <input
                  type="text"
                  placeholder="Email Address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default NewsLetter;
