import React from "react";

export default function CheckoutForm(props) {
  const handleChange = (event) => {
    // props.handleChange(event.target.)
    props.handleChange(event.target.name, event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Hiya, " + props.formData.firstName);
  };

  return (
    <div onSubmit={handleSubmit}>
      <form>
        <div>
          <label>Firstname:</label>
          <input
            type="text"
            name="firstName"
            required
            value={props.formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Lastname:</label>
          <input
            type="text"
            name="lastName"
            required
            value={props.formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            required
            value={props.formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            required
            value={props.formData.address}
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
