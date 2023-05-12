import React, { Component } from 'react'
import Contacts from '../Contacts/Contacts';
import Form from '../Form/Form';
import axios from 'axios';
import "./Main.css"

class Main  extends Component {
    constructor() {
        super();
        this.state = {
          users: [],
          loading: true,
          showForm:false,
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleShowForm = this.handleShowForm.bind(this);
        this.handleAddContact = this.handleAddContact.bind(this);
      }
    
      componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users').then((response) =>
          this.setState({
            users: response.data,
            loading: false,
          }),
        );
      }
    
      handleDelete(id) {
        this.setState({
          users: this.state.users.filter((user) => user.id !== id),
        });
      };
    
      handleShowForm() {
        this.setState({
          showForm: !this.state.showForm,
        });
      }
    
      handleAddContact(newUser) {
        this.setState({
          users: [...this.state.users, newUser],
          showForm: false,
        });
      };

    render() { 
        return (
            <main className='main'>
            {this.state.loading ? 
            (
             <div className='loader'></div>
            ) : (
             <div>
               <Contacts
                 users={this.state.users}
                 handleDelete={this.handleDelete}
                 showForm={this.handleShowForm}
               />
               {this.state.showForm && (
                 <Form
                 addContact={this.handleAddContact}
                 closeForm={this.handleShowForm}
                 />
               )}
             </div>
             )}
              </main>
        );
    }
}
 
export default Main;