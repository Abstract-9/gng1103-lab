import React, { Component } from 'react'

class PropsExample extends Component {
    render() {
        return (
            <div>
                <PropsTest test={process.cwd()}/>
            </div>
        )
    }
}

export default PropsExample;

class PropsTest extends Component {
    example = "";

    constructor(props) {
        super(props);
        this.example = props.test;
    }


    render() {
        return (
            <div>
                <h2>You passed {this.example} as a prop!</h2>
                <h2>You can also just access it like this: {this.props.test}</h2>
            </div>
        )
    }
}