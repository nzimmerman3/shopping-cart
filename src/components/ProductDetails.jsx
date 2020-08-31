import React from "react";
import Modal from "react-modal";

export default function ProductDetails(props) {
  return (
    <div>
      <Modal isOpen={true} onRequestClose={props.closeModal}>
        <div className="btn btn-danger" onClick={props.closeModal}>
          Close Modal
        </div>
      </Modal>
    </div>
  );
}
