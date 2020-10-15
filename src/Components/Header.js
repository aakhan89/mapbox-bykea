import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faUserCircle } from "@fortawesome/free-solid-svg-icons";
function Header() {
  let classTab = "activeTab Tab tabShadow";
  return (
    <Row className="header">
      <Col md="6" lg="6">
        <Row>
          <Col md="1" className="Tab">
            <FontAwesomeIcon icon={faUserCircle} size="lg" fixedWidth />
          </Col>
          <Col md="1" className="Tab">
            <FontAwesomeIcon
              icon={faSignOutAlt}
              size="lg"
              color="green"
              fixedWidth
            />
          </Col>
          <Col md="1" className="Tab">
            Logout
          </Col>
        </Row>
      </Col>
      <Col md="6" lg="6">
        <Row>
          <Col className="Tab tabShadow">QUEUED</Col>
          <Col className={classTab}>SCHEDULED</Col>
          <Col className="Tab tabShadow">IN PROGRESS</Col>
          <Col className="Tab tabShadow">COMPLETED</Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Header;
