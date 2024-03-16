import React from "react";
import MenuItem from "./menu-item";
import "./styles.css";

function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {list && list.length > 0
        ? list.map((listItem) => <MenuItem item={listItem} />)
        : null}
    </ul>
  );
}

export default MenuList;
