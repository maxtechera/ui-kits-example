import React from "react";
import {
  FormLayout,
  Subheading,
  Button,
  Select,
  TextField
} from "@shopify/polaris";
import Container from "../Container";

const options = [
  { label: "Today", value: "today" },
  { label: "Yesterday", value: "yesterday" },
  { label: "Last 7 days", value: "lastWeek" }
];

export default class TextFieldExample extends React.Component {
  state = {
    value: ""
  };
  render() {
    return (
      <Container>
        <Subheading>Forms</Subheading>
        <FormLayout>
          <TextField label="Store name" />
          <TextField type="email" label="Account email" />
          <Select
            label="Date range"
            options={options}
            onChange={this.handleChange}
            value={this.state.selected}
          />
          <Button primary>Submit</Button>
        </FormLayout>
      </Container>
    );
  }
}
