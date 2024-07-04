import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { links } from "../../../utils/links";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-danger text-light mt-auto">
      <Container>
        <Row>
          <Col>
            <div className="d-flex justify-content-center align-items-center">
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="mx-3 text-warning"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-warning"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
