import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import MaterialUI from "./MaterialUI";

const App = () => (
  <MuiThemeProvider>
    <MaterialUI />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
