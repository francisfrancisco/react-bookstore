import React from 'react'
import CartItem from './cartItem'

const CartItems = () => {
  return (
    <div className="container">
      <h1>Cart Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-3">Cart</div>
          </div>
        </div>
        {}
      </div>
    </div>
  )
}

export default CartItems
