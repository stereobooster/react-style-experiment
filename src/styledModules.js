import React from "react";

const checkIfFunction = x => !!(x && x.constructor && x.call && x.apply);
const filterObject = (rest, shouldForwardProp) =>
  Object.keys(rest)
    .filter(shouldForwardProp)
    .reduce((obj, key) => {
      obj[key] = rest[key];
      return obj;
    }, {});

// Like styled-components but for css-modules
export const styledModules = (styles, { shouldForwardProp } = {}) => {
  const get = (_, defaultAs, __) => (name, options = { shouldForwardProp }) => {
    const isFunction = checkIfFunction(name);
    let className;
    if (isFunction) {
      className = props => {
        let dynamicName = name(props);
        const isArray = Array.isArray(dynamicName);
        if (isArray) {
          dynamicName = dynamicName.filter(Boolean);
        }
        if (process.env.NODE_ENV === "development") {
          if (isArray) {
            if (dynamicName.findIndex(x => styles[x] === undefined) !== -1) {
              console.warn(`Class name is missing ${dynamicName}`);
            }
          } else if (styles[dynamicName] === undefined) {
            console.warn(`Class name is missing ${dynamicName}`);
          }
        }
        return isArray
          ? dynamicName.map(x => styles[x]).join(" ")
          : dynamicName[name];
      };
    } else {
      const isArray = Array.isArray(name);
      if (process.env.NODE_ENV === "development") {
        if (isArray) {
          if (name.findIndex(x => styles[x] === undefined) !== -1) {
            console.warn(`Class name is missing ${name}`);
          }
        } else if (styles[name] === undefined) {
          console.warn(`Class name is missing ${name}`);
        }
      }
      className = isArray ? name.map(x => styles[x]).join(" ") : styles[name];
    }

    const component = React.forwardRef(
      ({ children, as = defaultAs, ...rest }, ref) =>
        React.createElement(
          as,
          {
            ...(options.shouldForwardProp
              ? filterObject(rest, options.shouldForwardProp)
              : rest),
            className: isFunction ? className(rest) : className,
            ref: ref
          },
          children
        )
    );
    component.displayName = `${defaultAs}💅`;
    return component;
  };

  // browser support https://caniuse.com/#search=proxy
  return new Proxy({}, { get });
};
