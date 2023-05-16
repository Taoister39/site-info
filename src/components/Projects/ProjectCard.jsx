import { Card, Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col sm={6} md={4}>
      <Card bg="dark">
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>
          <Card.Text className="text-end">{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectCard;
