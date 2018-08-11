import React, { Component } from "react";
import classes from './Person.css';
import withClass from "../../../HOC/withClass";
import Aux from "../../../HOC/Aux";


class Person extends Component {
    constructor(props) {
        super(props);
        console.log("[Person.js] Inside Constructor", props)
    }

    componentWillMount() {
        console.log("[Person.js] Inside WillMount");
    }

    componentDidMount() {
        console.log("[Person.js] inside componentDidMount")
    }
    render() {
        console.log("[Person.js] inside render");
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
        )
    }
}

export default withClass(Person, classes.Person);
