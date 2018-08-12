import React from "react";
import Aux from "../../HOC/Aux";
import classes from "./Cockpit.css";

const Cockpit = (props) => {
    const assignedClasses = [];
    
    let btnClass = [classes.Button];
    
    if(props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(" ");
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <Aux>
            <h1>First React App</h1>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
            <button onClick={props.login}>Log In</button>
        </Aux>
    );
};

export default Cockpit;