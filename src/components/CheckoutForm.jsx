import React from "react";

export default function CheckoutForm(props) {
  const handleChange = (event) => {
    props.handleChange(event.target.name, event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Hiya, " + props.formData.firstName);
  };

  return (
    <div className="container" onSubmit={handleSubmit}>
      <form className="form">
        <div className="form-group">
          <input
            type="text"
            class="form-control"
            id="firstName"
            name="firstName"
            required
            placeholder="First name"
            value={props.formData.firstName}
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
            value={props.formData.lastName}
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
            value={props.formData.email}
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
            value={props.formData.address}
            onChange={handleChange}
          />
        </div>
        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
    </div>
  );
}
