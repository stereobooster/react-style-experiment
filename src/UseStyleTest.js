import React from "react";
import { singletoneStyled } from "./singletoneStyled";

const styled = singletoneStyled(`
:root {
  --main-color: red;
}

.Center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.Btn {
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: var(--main-color);
  border: 2px solid var(--main-color);
}

.primary {
  background: var(--main-color);
  color: white;
}
`);

const Center = styled.div("Center");
const StyledButton = styled.button("Btn");

export const UseStyleTest = () => {
  return (
    <Center>
      <StyledButton>Normal Button</StyledButton>
      <StyledButton>Primary Button</StyledButton>
    </Center>
  );
};
