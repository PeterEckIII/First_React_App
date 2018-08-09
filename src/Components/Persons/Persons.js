import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log("[Persons.js] Inside Constructor", props)
    }

    componentWillMount() {
        console.log("[Persons.js] Inside WillMount");
    }

    componentDidMount() {
        console.log("[Persons.js] inside componentDidMount")
    }

    componentWillReceiveProps(nextProps) {
        console.log("[UPDATE Persons.js] inside componentWillReceiveProps", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("[UPDATE Persons.js] inside shouldComponentUpdate", nextProps, nextState);
        // After removing a person component, if the nextProps.persons is equal to the formerProps (this.props.person) then we want to return false, which means the component shouldn't update
        // After removing a person component, if the nextProps.persons is NOT equal to the formerProps (as is the case below) then the component SHOULD update.
        return nextProps.persons !== this.props.persons;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("[UPDATE: Persons.js] inside componentWillUpdate", nextProps, nextState);
    }

    componentDidUpdate() {
        console.log("[UPDATE: Persons.js] inside componentDidUpdate");
    }

    render () {
        console.log("[Persons.js] inside render");
        return this.props.persons.map( ( person, index ) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />
        });
    }
}

export default Persons;