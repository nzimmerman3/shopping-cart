import React from "react";
import { formatCurrency } from "../util";

export default function CartFooter(props) {
  // {cartItems.reduce((a, b) => a + b.count, 0)}
  const subtotal = props.cartItems.reduce((a, b) => a + b.count * b.price, 0);
  const tax = subtotal * 0.08;
  return (
    <div className="cart-footer">
      <div className="cart-footer-item cart-subtotal">
        <span className="cart-footer-left">Subtotal:</span>
        <span className="cart-footer-right">{formatCurrency(subtotal)}</span>
      </div>
      <div className="clear"></div>
      <div className="cart-footer-item cart-tax">
        <span className="cart-footer-left">Tax:</span>
        <span className="cart-footer-right">{formatCurrency(tax)}</span>
      </div>
      <div className="clear"></div>
      <div className="cart-footer-item cart-total">
        <span className="cart-footer-left">Total:</span>
        <span className="cart-footer-right">
          {formatCurrency(subtotal + tax)}
        </span>
      </div>
      <br />
      <div className="btn btn-primary main" onClick={props.checkout}>
        Checkout
      </div>
    </div>
  );
}
