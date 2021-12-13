import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import { selectCollections } from '../../redux/shop/shop.selector';

const Shop = ({ collections }) => {
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherShopProps }) => (
        <CollectionPreview key={id} {...otherShopProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(Shop);
