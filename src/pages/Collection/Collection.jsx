import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';

import './Collection.scss';

export const Collection = ({ collection }) => {
  console.log(collection);
  return (
    <div className='collection-page'>
      <h2>Collection Page</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
