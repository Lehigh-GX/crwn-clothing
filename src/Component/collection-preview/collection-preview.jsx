import React from "react";
import "./collection-preview.scss";
import CollectionItem from "../collection-items/collection-item";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...itemProps }) => (
          <CollectionItem key={id} {...itemProps}></CollectionItem>
        ))}
    </div>
  </div>
);
export default CollectionPreview;
