import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import './Checkout.scss';

export const Checkout = ({ total, cartItems }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>

        <div className='header-block'>
          <span>Quantity</span>
        </div>

        <div className='header-block'>
          <span>Product</span>
        </div>

        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>
        <span>Total: ${total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
