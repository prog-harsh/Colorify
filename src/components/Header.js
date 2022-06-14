import React from "react";
import "./Header.css";

const Header = (props) => {
  const onReload = () => {
    props.onRefresh();
  };

  return (
    <header className="header">
      <h2>Colorify</h2>
      <h2 className="refresh" onClick={onReload}>
        Refresh
      </h2>
    </header>
  );
};

export default Header;
