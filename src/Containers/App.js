import React, { PureComponent } from 'react';
import classes from "./App.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";
import withClass from "../HOC/withClass";
import Aux from "../HOC/Aux";

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  
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
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
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

  static getDerivedStateFromProps(nextProps, prevState) {
    // Run this when updating props. It allows you to update your state along with the updated props
    // State should RARELY be coupled with props, so this should be used sparingly
    console.log("[UPDATE App.js] Inside getDerivedStateFromProps", nextProps, prevState);

    return prevState;
  }

  getSnapshotBeforeUpdate() {
    // Gets a snapshot right before the component updates
    console.log("[UPDATE App.js] Inside getSnapshotBeforeUpdate");
    // 

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
    // Immutable because we are making a copy of persons with ...this.state.persons
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( (prevState, props) => { 
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
    }});
  }

  loginHandler = () => {
    this.setState({authenticated: true});
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
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          login={this.loginHandler}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
          <AuthContext.Provider value={this.state.authenticated}>{persons}</AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
