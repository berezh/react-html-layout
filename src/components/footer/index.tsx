import React from "react";

const defaultStyle: React.CSSProperties = {
  backgroundColor: "#333",
  // height: 50,
  color: "white",
  padding: 10,
};

interface Props {
  children?: React.ReactNode;
}

export const Footer: React.FC<Props> = ({ children }) => {
  return typeof children === "string" ? <div style={defaultStyle}>{children}</div> : <React.Fragment>{children}</React.Fragment>;
};
