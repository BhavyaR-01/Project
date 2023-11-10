import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class UpdateCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      order_id: '',
      phone: '',
      email: '',
      errorMessage: '', // Add a state property for error message
    };
  }

  // Event function for handling input changes
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  // Event handler for form submission
  submitHandler = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const { id, name, order_id, phone, email } = this.state;

    // Send a POST request to the specified URL
    axios.post('http://localhost:8082/Customer', {
      id: id,
      name: name,
      order_id: order_id,
      phone: phone,
      email: email,
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
        this.setState({ errorMessage: 'Failed to update customer' });
      });
  }

  render() {
    const { id, name, order_id, phone, email, errorMessage } = this.state;

    return (
      <div className="inputdetails">
        <form onSubmit={this.submitHandler}>
          <div>
            <h1>Input the Required Details</h1>
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div>
            <input type="text" name="id" value={id} placeholder="Customer Id" onChange={this.changeHandler} />
          </div>
          <div>
            <input type="text" name="name" value={name} placeholder="Customer Name" onChange={this.changeHandler} />
          </div>
          <div>
            <input type="text" name="order_id" value={order_id} placeholder="Customer Order_id" onChange={this.changeHandler} />
          </div>
          <div>
            <input type="text" name="phone" value={phone} placeholder="Customer Phone" onChange={this.changeHandler} />
          </div>
          <div>
            <input type="text" name="email" value={email} placeholder="Customer Email" onChange={this.changeHandler} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default UpdateCustomer;
