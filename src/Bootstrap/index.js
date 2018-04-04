import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import Tabs from "./Tabs";
const Bootstrap = () => [<ButtonsExample />, <CardExample />, <Tabs />];

const ButtonsExample = () => (
  <div>
    <Button color="primary">primary</Button>
    <Button color="secondary">secondary</Button>
    <Button color="success">success</Button>
    <Button color="danger">danger</Button>
  </div>
);

const CardExample = () => (
  <div>
    <Card>
      <CardImg
        top
        width="100%"
        src="https://source.unsplash.com/daily"
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
        <Button color="primary" size="lg">
          primary
        </Button>
      </CardBody>
    </Card>
  </div>
);

export default Bootstrap;
