import React from "react";
import { Layout, Page, Heading } from "@shopify/polaris";
import FormExample from "./FormExample";
import CardExample from "./CardExample";
import ButtonsExample from "./ButtonsExample";

const ShopifyPolaris = () => [
  <link
    rel="stylesheet"
    href="https://sdks.shopifycdn.com/polaris/1.13.1/polaris.min.css"
  />,
  <Page>
    <Layout>
      <Layout.AnnotatedSection title={<Heading>Polaris</Heading>}>
        <CardExample />
        <FormExample />
        <ButtonsExample />
      </Layout.AnnotatedSection>
    </Layout>
  </Page>
];

export default ShopifyPolaris;
