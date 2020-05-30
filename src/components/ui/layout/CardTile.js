import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class CardTile extends Component {
  render() {
    const {
      img,
      title,
      text,
      hasDemo,
      hasCode,
      demoLink,
      codeLink,
      nameR,
    } = this.props;
    return (
      <Card className="col-10 offset-1 col-md-6 offset-md-0 col-lg-4 my-3">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="card-text">{text}</Card.Text>
        </Card.Body>
        <Card.Body>
          {hasDemo && (
            <Card.Link
              className={`btn btn-dark ${hasDemo ? "" : "disabled"}`}
              href={demoLink}
            >
              Demo
            </Card.Link>
          )}
          <Card.Link
            className={`btn btn-dark ${hasCode ? "" : "disabled"}`}
            href={codeLink}
          >
            {nameR || "Github"}
          </Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

export default CardTile;
