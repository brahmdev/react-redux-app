import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './ShowId';
import ShowId from './ShowId';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import selectContact from './actions/select_contact';

class App extends Component {

  state= {
    jsonResponse : ''
  }

  componentDidMount() {
    console.log("did mount");
    //this.showContacts();
  }
  fetchData() {

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        if(response.ok){
          return response.json()
        }else{
          throw new Error('Something went wrong...')
      }
    }).then(json => this.setState({jsonResponse: json.userId}))
  }

  showContacts = () =>  {
   
    /*var namesList = this.state.contacts.map(function(contact){
      return <li>{contact.name}</li>;
    })
    return (
      <ul>
        <li>{namesList}</li>
      </ul>
    );*/

    return this.props.contacts.map((contact) => {
      return (
        <li
          key={contact.phone}
          onClick={() => this.props.selectContact(contact)}
          className='list-group-item'>{contact.name}</li>
      );
    });
  }

  showActiveContact() {
      return (
        <li
          key={this.props.activeContact.phone}
          className='list-group-item'>{this.props.activeContact.name}</li>
      );
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h3>Active Contact:</h3>
          {this.showActiveContact()}
          <h3>Contact List:</h3>
          {this.showContacts()}
          <button onClick={() => this.fetchData()}>Fetch</button>
          <ShowId id={this.state.jsonResponse}></ShowId>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts,
    activeContact:  state.activeContact
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectContact: selectContact
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

//export default App;
