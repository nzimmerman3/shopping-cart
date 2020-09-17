import React, { useState } from "react";
import CartContents from "./CartContents";
import CartFooter from "./CartFooter";
import CartHeader from "./CartHeader";

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = { target };
    setFormData((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Hiya, " + formData.firstName);
  };

  return (
    <div className="row">
      <div className="col-9" onSubmit={handleSubmit}>
        <form className="form">
          <div className="form-group">
            <input
              type="text"
              class="form-control"
              id="firstName"
              name="firstName"
              required
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              class="form-control"
              id="lastName"
              name="lastName"
              required
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              class="form-control"
              id="address"
              name="address"
              required
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
      </div>
      <div className="col-3 cart">
        <CartHeader cartItems={[]} />
        <CartContents cartItems={[]} removeItem={() => {}} />
        <CartFooter cartItems={[]} checkout={() => {}} />
      </div>
    </div>
  );
}
