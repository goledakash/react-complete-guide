import React, { Component } from 'react';
import './App.css';
import './Person/Person.css'
import Person from './Person/Person';

class App extends Component {


  state = {
    persons: [
      {name: 'John', age: 25},
      {name: 'David', age: 26},
      {name: 'Steph', age: 24}
    ]
  }

  dynamicSwitchHandler = (newName) => {
  //  console.log('Swicth button clicked!');
  //DONT DO THIS  this.state.persons[1].name = 'Akash';
    this.setState({
      persons: [
        {name: newName, age: 25},
        {name: 'Draxler', age: 26},
        {name: 'Steph', age: 22}
      ]
    })
  }

  nameChangeHandler = (event) => {

    this.setState({
      persons: [
        {name: 'John', age: 25},
        {name: event.target.value, age: 26},
        {name: 'Steph', age: 22}
      ]
    })

  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, This is a React Root App component</h1>
        <button style={style} onClick={() => this.dynamicSwitchHandler('Akash!')}>Switch Name</button>
        <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}/>
        <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.dynamicSwitchHandler.bind(this, 'Max')}
        changed={this.nameChangeHandler} >Hobbies: Racing </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}
// Person is a self closing tag, as nothing is used in b/w
export default App;
