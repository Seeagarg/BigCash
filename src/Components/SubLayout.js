import React from "react";
import classes from "./SubLayout.module.css";
import { useLocation } from "react-router-dom";

const SubLayout = ({ children}) => {
 
  return (

    <div className={classes.main}>
      <div className={classes.bg}>
        <img
          src="/assets/background.png"
          alt="background"
          className={classes.image}
        />
      </div>
      {children}
    </div>
  );
};

export default SubLayout;
