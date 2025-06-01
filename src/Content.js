import React from "react";

import ItemList from "./ItemList.js";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2 rem", color: "red`" }}>
          {" "}
          Your list is empty!
        </p>
      )}
    </>
  );
};

export default Content;
