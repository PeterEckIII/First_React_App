import React, { Component } from "react";

// Passing the spread operator with props splits up the props object into separate key / value pairs

// const withClass = (WrappedComponent, className) => {
//     return(props) => (
//         <div className={className}>
//             <WrappedComponent {...props} />
//         </div>
//     ) 
// }

// Above and below are two ways to implement the same idea - one with stateful and one with stateless components

const withClass = (WrappedComponent, className) => {
    const WithClass = class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
                </div>
            )
        }
    }
    return React.forwardRef((props, ref) => {
        return <WithClass {...props} forwardedRef={ref} />
    });
}


export default withClass;