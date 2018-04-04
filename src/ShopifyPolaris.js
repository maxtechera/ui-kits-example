import React from "react";
import { Page, Card, List, Button } from "@shopify/polaris";

const ShopifyPolaris = () => [
  <Page>
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
  </Page>
];

export default ShopifyPolaris;
