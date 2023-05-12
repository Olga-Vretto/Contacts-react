import React, { Component } from 'react'
import "./Input.css"

class Input extends Component {
 
    render() { 
        return (
            <>
            <label name='firstName'>First name: </label>
              <input
          id='firstName'
          name='firstName'
          className='input'
          type='text'
          value={this.state.firstName}
          onChange={this.handleChange}
          placeholder="Peter"
        />
              <label name='lastName'>Last name: </label>
              <input
          id='lastName'
          name='lastName'
          className='input'
          type='text'
          value={this.state.lastName}
          onChange={this.handleChange}
          placeholder='Parker'
        />
              <label name='phone'>Phone Number: </label>
              <input
          id='phone'
          name='phone'
          className='input'
          type='number'
          value={this.state.phone}
          onChange={this.handleChange}
          placeholder='number'
        />
            </>
        );
    }
}
 
export default Input;