import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './ShowId';
import ShowId from './ShowId';

class App extends Component {

  state= {
    jsonResponse : '',
    contacts: [{
      "name": "Miguel",
      "phone": "123456789",
      },{
          "name": "Peter",
          "phone": "883292300348",
      },{ 
          "name": "Jessica",
          "phone": "8743847638473", 
      },{ 
          "name": "Michael", 
          "phone": "0988765553",
    }], 
    activeContact: {
        "name": "Miguel",
        "phone": "123456789",
    }
  }

  componentDidMount() {
    console.log("did mount");
    this.showContacts();
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
   return(
    this.state.contacts.map(function(contact){
      return <li key={contact.name}>{contact.name}</li>;
    }));
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
          <ul>
          {this.showContacts()}
          </ul>
          <button onClick={() => this.fetchData()}>Fetch</button>
          <ShowId id={this.state.jsonResponse}></ShowId>
        </header>
      </div>
    );
  }
}

export default App;
