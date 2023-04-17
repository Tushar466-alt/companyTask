import React from "react";

function PTCard({ children, style }) {
  return <div className="bg-white shadow-md p-[1rem] rounded-lg" style={style}>{children}</div>;
}

export default PTCard;
