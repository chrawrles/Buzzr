import React from "react";

export const Row = ({ fluid, children, className }) =>
  <div className={`row${fluid ? "-fluid" : "" + ' '+ className}`}>
    {children}
  </div>;
