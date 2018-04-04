import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import MaterialUI from "./MaterialUI";
import ShopifyPolaris from "./ShopifyPolaris";
import Bootstrap from "./Bootstrap";

const Examples = () => [
  // <MaterialUI />
  // <ShopifyPolaris />
  // <Bootstrap />
];

const App = () => (
  <Container>
    <Examples />
  </Container>
);

const Container = styled.div`
  margin: auto;
  max-width: 400px;
  > * {
    margin: 16px;
  }
`;

ReactDOM.render(<App />, document.getElementById("root"));
