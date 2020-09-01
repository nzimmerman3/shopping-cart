import React from "react";
import Modal from "react-modal";
import { formatCurrency } from "../util";

export default function ProductDetails(props) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "80%",
    },
  };
  return (
    <div>
      <Modal
        isOpen={true}
        onRequestClose={props.closeModal}
        style={customStyles}
      >
        <h1>{props.product.name}</h1>
        <img
          className="modal-img"
          src={props.product.image}
          alt={props.product.name}
        />
        <p>{props.product.description}</p>
        <h5>{formatCurrency(props.product.price)}</h5>
        <div className="buttons">
          <div className="btn btn-danger modal-btn" onClick={props.closeModal}>
            Close
          </div>
          <div
            className="btn btn-primary modal-btn"
            onClick={() => props.addToCart(props.product)}
          >
            Add to cart
          </div>
        </div>
      </Modal>
    </div>
  );
}
