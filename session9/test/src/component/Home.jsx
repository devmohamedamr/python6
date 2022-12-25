import React, { Component } from 'react'

export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    counter = ()=>{
        let c = this.state.count; 
        c++
        this.setState({count:c});
    }

    render() {
        let { count } = this.state;
        return (
            <>
                <div>counter is {count}</div>
                <button className='btn btn-success' onClick={this.counter}>click</button>
            </>
        )
    }
}
