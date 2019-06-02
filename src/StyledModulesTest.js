import React from "react";
import { styledModules } from "./styledModules2";
import styles from "./StyledTest.module.css";
import theme from "./theme.module.css";

// import isPropValid from "@emotion/is-prop-valid";
// import classNames from "classnames";
// const StyledButton = ({ primary, children, ...rest }) => (
//   <button
//     className={classNames([styles.btn, primary && styles.primary])}
//     {...rest}
//   >
//     {children}
//   </button>
// );

// import classNamesBind from "classnames/bind";
// let cx = classNamesBind.bind(styles);
// const StyledButton = ({ primary, children, ...rest }) => (
//   <button className={cx({ btn: true, primary })} {...rest}>
//     {children}
//   </button>
// );

// const styled = styledModules(styles, {
//   shouldForwardProp: isPropValid
// });
// const Center = styled.div("center");
// const StyledButton = styled.button(({ primary }) => [
//   "btn",
//   primary && "primary"
// ]);

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
