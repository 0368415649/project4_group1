import React from "react";
import cx from "classnames";

import "./styles/Checkbox.scss";

const Checkbox = ({ label, isChecked, onChange, className = "" }) => {
  const classes = cx("Checkbox", className);

  return (
    <div className={classes} onClick={onChange}>
      <div className={`handler ${isChecked ? "checked" : ""}`} />
      {label}
    </div>
  );
};

export default Checkbox;
