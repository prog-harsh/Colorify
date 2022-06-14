import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <header className="header">
      <h2>Colorify</h2>
      <h2 className="refresh" onClick={() => props.onRefresh()}>
        Refresh
      </h2>
    </header>
  );
};

export default Header;
