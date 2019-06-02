import React from "react";
import { styledModules } from "./styledModules";
import styles from "./StyledTest.module.css";
import isPropValid from "@emotion/is-prop-valid";
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

export const StyledModulesTest = () => (
  <Center>
    <StyledButton>Normal Button</StyledButton>
    <StyledButton primary>Primary Button</StyledButton>
  </Center>
);
