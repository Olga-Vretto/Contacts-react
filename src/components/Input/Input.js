import React, { Component } from 'react';
import "./Input.css";

class Input extends Component {
    render() {
        return (
            <>
                <label htmlFor='firstName'>First name: </label>
                <input
                    id='firstName'
                    name='firstName'
                    className='input'
                    type='text'
                    value={this.props.firstName}
                    onChange={this.props.handleChange}
                    placeholder="Peter"
                />
                <label htmlFor='lastName'>Last name: </label>
                <input
                    id='lastName'
                    name='lastName'
                    className='input'
                    type='text'
                    value={this.props.lastName}
                    onChange={this.props.handleChange}
                    placeholder='Parker'
                />
                <label htmlFor='phone'>Phone Number: </label>
                <input
                    id='phone'
                    name='phone'
                    className='input'
                    type='number'
                    value={this.props.phone}
                    onChange={this.props.handleChange}
                    placeholder='number'
                />
            </>
        );
    }
}

export default Input;