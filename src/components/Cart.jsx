import React from 'react'

export default function Cart(props) {
  const {cartItems} = props
  return (
    <div className="filter cart">
      {cartItems.length === 0 ? (
        <div>Empty</div>
      ) : (
        <div>{cartItems.reduce((a, b) => a + b.count, 0)
        } item{cartItems.length === 1 ? "" : "s"} in cart</div>
      )
    }
    </div>
  )
}
