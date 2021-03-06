import React from "react";
import Shop_Data from "./shop.data.js";
import CollectionPreview from "../../Component/collection-preview/collection-preview";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: Shop_Data,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
