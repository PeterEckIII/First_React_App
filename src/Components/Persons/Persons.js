import React, { PureComponent } from "react";
// Purecomponent essentially includes the shouldComponentUpdate check within itself, helping us out with performance. 
import Person from "./Person/Person";

class Persons extends PureComponent {
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

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("[UPDATE Persons.js] inside shouldComponentUpdate", nextProps, nextState);
    //     // After removing a person component, if the nextProps.persons is equal to the formerProps (this.props.person) then we want to return false, which means the component shouldn't update
    //     // After removing a person component, if the nextProps.persons is NOT equal to the formerProps (as is the case below) then the component SHOULD update.
    //     return nextProps.persons !== this.props.persons || 
    //     nextProps.changed !== this.props.changed || 
    //     nextProps.clicked !== this.props.clicked;
    //     // The above check can help increase performance in the case of several components being on screen. Since we included the 'Show Persons' button in our App.js above the Cockpit component, we don't want the entire lifecycle running when nothing is changing. 
    // }

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