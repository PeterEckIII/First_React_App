import React, { Component } from "react";
import classes from './Person.css';
import withClass from "../../../HOC/withClass";
import Aux from "../../../HOC/Aux";
import PropTypes from "prop-types";


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
        this.inputElement.focus();
    }
    render() {
        console.log("[Person.js] inside render");
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
                <input
                // Ref being used below allows us to point to a particular reference point and run code like the this.inputElement.focus() in the componentDidMount() method above
                // focus() allows you to default the focus of the screen to a particular element
                ref={(input) => { this.inputElement = input }} 
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name} />
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);
