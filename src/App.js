import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './ShowId';
import ShowId from './ShowId';
import {connect} from 'react-redux'

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
          //onClick={() => this.props.selectContact(contact)}
          className='list-group-item'>{contact.name}</li>
      );
    });
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
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
    contacts: state.contacts
  };
}

export default connect(mapStateToProps)(App)

//export default App;
