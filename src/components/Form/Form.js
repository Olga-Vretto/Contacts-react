import React, { Component } from 'react'
import Input from '../Input/Input';
import "./Form.css"

class Form extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddUser(e) {
    e.preventDefault();
    const newUser = {
      id: Date.now(),
      name: `${this.state.firstName} ${this.state.lastName}`,
      phone: this.state.phone,
    };
    this.props.addContact(newUser);
    this.props.closeForm()
  };

  handleClose(e) {
    e.preventDefault();
    this.props.closeForm()
  }
    render() {
        return (
              <form className='form'>
                  <Input
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    phone={this.state.phone}
                    handleChange={this.handleChange}
                  />
                  <div className='buttons'>
                    <button className='btn green' onClick={this.handleAddUser}>&#10004;</button>
                    <button className='btn red' onClick={this.handleClose}>&#10006;</button>
                  </div>
                </form>
                );
              }
            }
          
    export default Form;
          
          
          
          
          
          
          