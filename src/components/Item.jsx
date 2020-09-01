import React from "react";
import { formatCurrency, formatDescription } from "../util";
import { Link, BrowserRouter } from "react-router-dom";

export default function Item(props) {
  return (
    <div className="col col-sm-3 d-flex" style={{ minWidth: "25%" }}>
      <div className="card">
        <div className="clickable" onClick={() => props.openModal(props.item)}>
          <img
            className="card-img-top"
            src={props.item.image}
            alt={props.item.name}
          />
          <div className="card-body">
            <h5 className="card-title">{props.item.name}</h5>
            <p className="card-text">
              {formatDescription(props.item.description, 70)}
            </p>
          </div>
        </div>

        <div className="card-footer">
          <div className="row">
            <div className="col">
              <h5 className="card-text card-price">
                {formatCurrency(props.item.price)}
              </h5>
            </div>
            <div className="col text-right">
              <div
                className="btn btn-primary main"
                onClick={() => props.addToCart(props.item)}
              >
                Add to cart
              </div>
              <BrowserRouter>
                <Link></Link>
              </BrowserRouter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
