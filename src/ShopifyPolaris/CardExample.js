import React from "react";
import { Card, List } from "@shopify/polaris";
import Container from "../Container";
const ShopifyPolaris = () => (
  <Container>
    <Card
      title="Shipment 1234"
      secondaryFooterAction={{ content: "Cancel shipment" }}
      primaryFooterAction={{ content: "Add tracking number" }}
    >
      <Card.Section title="Items">
        <List>
          <List.Item>1 × Isis Glass, 4-Pack</List.Item>
          <List.Item>1 × Anubis Cup, 2-Pack</List.Item>
        </List>
      </Card.Section>
    </Card>
  </Container>
);

export default ShopifyPolaris;
