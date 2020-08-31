import React from 'react'

export default function CheckoutForm(props) {
  function handleChange(event) {
    // props.handleChange(event.target.)
    props.handleChange(event.target.name, event.target.value)
  }

  return (
    <div onSubmit={props.handleSubmit}>
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

      </form>
    </div>
  )
}
