import React from "react";

interface Props {
  style: React.CSSProperties;
}

interface Props {
  children?: React.ReactNode;
}

export const Sidebar: React.FC<Props> = ({ style, children }) => {
  let newStyle = style;
  if (typeof children === "string") {
    newStyle = {
      backgroundColor: "#ccc",
      // height: 50,
      color: "black",
      width: 150,
      padding: 5,
      ...style,
    };
  }

  return <div style={newStyle}>{children}</div>;
};
