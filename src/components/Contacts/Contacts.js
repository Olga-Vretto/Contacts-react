import React, { Component } from 'react';
import './Contacts.css';


class Contacts extends Component {
  
    render() {
      return (
          <div className='contacts'>
            <table className='table' >
              <thead>
                <tr className='tr'>
                  <th className='th'>First Name:</th>
                  <th className='th'>Last Name:</th>
                  <th className='th'>Phone Number:</th>
                  <th className='th'>Delete contact:</th>
                </tr>
              </thead>
              <tbody>
                {this.props.users.map((user) => {
                  const userNames = user.name.split(' ');
                  return (
                    <tr key={user.id}>
                      <th className='user'>{userNames[0]}</th>
                      <th className='user'>{userNames[1]}</th>
                      <th className='user'>{user.phone}</th>
                      <th className='user'>
                        <button className='btn-delete' onClick={() => this.props.handleDelete(user.id)}>&#10006;</button> 
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button className='add-btn' onClick={this.props.showForm}>Create Contact</button>
          </div>
        );
    }
  }
  
export default Contacts