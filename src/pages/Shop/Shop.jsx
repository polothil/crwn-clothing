import React, { Component } from 'react';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

import SHOP_DATA from './Shop.data';

export class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherShopProps }) => (
          <CollectionPreview key={id} {...otherShopProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
