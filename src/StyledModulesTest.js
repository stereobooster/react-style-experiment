import React from "react";
import isPropValid from "@emotion/is-prop-valid";
import { styledModules } from "./styledModules";
import styles from "./StyledTest.module.css";
import theme from "./theme.module.css";

const styled = styledModules(styles, {
  shouldForwardProp: isPropValid
});

const Center = styled.div("center");
// const Button = styled.button("btn");
// const PrimaryButton = styled.button(["btn", "primary"]);
const StyledButton = styled.button(props => [
  "btn",
  props.primary && "primary"
]);

// theming with the help of css variables
const { div } = styledModules(theme);
const Theme = div("Theme");

export const StyledModulesTest = () => (
  <Theme>
    <Center>
      <StyledButton>Normal Button</StyledButton>
      <StyledButton primary>Primary Button</StyledButton>
    </Center>
  </Theme>
);
