import React from "react";

export default function CartContents(props) {
  return (
    <div>
      {props.cartItems.map((item) => {
        return (
          <div className="cart-item">
            <div className="cart-info">
              {item.name} x {item.count}
              <div
                className="btn btn-primary main"
                onClick={() => props.removeItem(item)}
              >
                Remove item
              </div>
            </div>
            <div className="cart-image">
              <img src={item.image} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
