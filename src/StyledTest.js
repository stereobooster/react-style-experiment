import React from "react";
import isPropValid from "@emotion/is-prop-valid";

import { styled, ThemeProvider } from "./unstyled-components";

const H1 = styled("h1", {
  shouldForwardProp: prop => isPropValid(prop) && prop !== "color"
})(props => ({
  color: "hotpink",
  background: props.theme.background
}));

export const StyledTest = () => (
  <ThemeProvider theme={{ background: "#000" }}>
    <H1 color="lightgreen">This is lightgreen.</H1>
  </ThemeProvider>
);
