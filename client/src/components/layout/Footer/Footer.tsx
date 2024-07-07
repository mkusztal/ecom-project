import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { links } from "../../../utils/links";
import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
  return (
    <div className={`${styles.root}`}>
      <Image src="images/tree.jpg" className={`${styles.tree_image}`} />
      <footer className={`${styles.footer} text-light mt-auto`}>
        <Container>
          <Row>
            <Col>
              <div className="d-flex justify-content-center align-items-center">
                <a
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.links}`}
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.links}`}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};
