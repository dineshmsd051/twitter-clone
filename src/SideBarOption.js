import React from 'react';
import "./SideBarOption.css";

function SideBarOption({ active, text, Icon }) {
  return (
    <div className="sideBarOption__Wrapper">
      <div className={`sideBarOption ${active && `sideBarOption--active`}`}>
        <Icon />
        <h2>{text}</h2>
      </div>
    </div>
  );
}

export default SideBarOption