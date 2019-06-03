import React from "react";
import { stylesheetSinglentone } from "./singlentone";

export const getUseStyle = () => {
  const sheet = stylesheetSinglentone();
  return styles => {
    React.useEffect(() => {
      sheet.add(styles);
      return () => {
        sheet.remove();
      };
    }, []);
  };
};
