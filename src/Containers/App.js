import React, { PureComponent } from 'react';
import classes from "./App.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";

class App extends PureComponent {
  // Only use Purecomponent when 
  constructor(props) {
    super(props);
    console.log("[App.js] Inside Constructor", props)
    this.state = {
      persons: [
        {
          name: "Peter", age: 26, id: 1
        },
        {
          name: "Katie", age: 25, id: 2
        },
        {
          name: "Ben", age: 21, id: 3
        }
      ],
      showPersons: false
    }
  }

  componentWillMount() {
    console.log("[App.js] Inside WillMount");
  }

  componentDidMount() {
    console.log("[App.js] inside componentDidMount")
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[UPDATE App.js] inside shouldComponentUpdate", nextProps, nextState);
  //   // After removing a person component, if the nextProps.persons is equal to the formerProps (this.props.person) then we want to return false, which means the component shouldn't update
  //   // After removing a person component, if the nextProps.persons is NOT equal to the formerProps (as is the case below) then the component SHOULD update.
  //   return nextProps.persons !== this.props.persons ||
  //   nextState.showPersons !== this.state.showPersons;
  //   // return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log("[UPDATE: App.js] inside componentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate() {
    console.log("[UPDATE: App.js] inside componentDidUpdate");
  }
  state = {
    persons: [
      {
        name: "Peter", age: 26, id: 1
      },
      {
        name: "Katie", age: 25, id: 2
      },
      {
        name: "Ben", age: 21, id: 3
      }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonsHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    console.log("[App.js] inside render");
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonsHandler}
        changed={this.nameChangedHandler} />
    }

    return (
      <div className={classes.App}>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
