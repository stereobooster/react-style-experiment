import React from "react";
import { stylesheetSinglentone } from "./singlentone";

export const getUseStyle = (styles) => {
  const sheet = stylesheetSinglentone(styles);
  return () => {
    React.useEffect(() => {
      // styles will be inserted in the DOM after first render of component
      sheet.add();
      return () => sheet.remove();
    }, []);
  };
};
