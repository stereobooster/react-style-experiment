import React from "react";
import { styledModules } from "./styledModules";
import styles from "./StyledTest.module.css";
import theme from "./theme.module.css";

const styled = styledModules(styles);
const Center = styled.div("Center");
const StyledButton = styled.button("Btn");

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
