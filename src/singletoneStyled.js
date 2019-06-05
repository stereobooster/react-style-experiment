import React from "react";

import { getUseStyle } from "./useStyle";

export const singletoneStyled = styles => {
  const useStyle = getUseStyle(styles);

  const get = (_, defaultAs, __) => defaultClass => {
    const component = React.memo(
      React.forwardRef(({ children, as = defaultAs, ...props }, ref) => {
        useStyle();
        return React.createElement(
          as,
          { ...props, className: defaultClass, ref },
          children
        );
      })
    );
    component.displayName = `${defaultClass}💅`;
    return component;
  };

  // browser support https://caniuse.com/#search=proxy
  return new Proxy({}, { get });
};
