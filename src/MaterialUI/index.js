import React from "react";
import Paper from "material-ui/Paper";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import ButtonsExample from "./ButtonsExample";
import CardExample from "./CardExample";
import TabsExample from "./TabsExample";

const MaterialUI = () => (
  <MuiThemeProvider>
    <h4>MaterialUI</h4>
    <CardExample />
    <ButtonsExample />
    <TabsExample />
  </MuiThemeProvider>
);

export default MaterialUI;
