import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { links } from "../../../utils/links";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <div className={`${styles.root}`}>
      <Image src="images/tree.jpg" className={`${styles.tree_image}`} />
      <footer className={`${styles.footer} text-dark mt-auto`}>
        <Container className={`${styles.container}`}>
          <Row>
            <Col>
              <div className="d-flex justify-content-center align-items-center">
                <Link
                  to={links.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.links}`}
                >
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
                <Link
                  to={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.links}`}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className={`${styles.copyright}`}>
              <p>Copyright @ Maciej Kusztal</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};
