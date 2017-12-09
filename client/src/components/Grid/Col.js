import React from "react";

export const Col = ({ size, children, className }) =>
  <div className={size.split(" ").map(size => "col-" + size).join(" ") + ' ' + className}>
    {children}
  </div>;
