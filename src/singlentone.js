// https://github.com/theKashey/react-style-singleton/blob/master/src/singlentone.ts

const isWindow = typeof window !== "undefined";

function makeStyleTag() {
  const tag = document.createElement("style");
  tag.type = "text/css";
  return tag;
}

function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}

function insertStyleTag(tag) {
  const head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}

export const stylesheetSinglentone = () => {
  let counter = 0;
  let stylesheet = null;
  return {
    add: style => {
      if (isWindow && counter === 0) {
        if ((stylesheet = makeStyleTag())) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: () => {
      counter--;
      if (isWindow && counter === 0 && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};
