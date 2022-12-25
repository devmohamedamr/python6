import React, { Component } from 'react';
import axios from 'axios';
export default class About extends Component {
    constructor(){
        super();
        console.log("construct call");
        this.state = {
            counter:0
        }
    }

  
    increment = ()=> {
        let count  = this.state.counter;
        count++;
        this.setState({counter:count});
    }
    async fetchTodos() {
      let res = await  axios.get("https://jsonplaceholder.typicode.com/todos");
      console.log(res);
    }
  
  render() {
    console.log("render call");
    return (
      <>
        <div> counter {this.state.counter}</div>
        <button onClick={this.increment}>count</button>
      </>
    );
  }
  componentDidUpdate(){
    console.log("componentDidUpdate");
  }
    // api  
  componentDidMount(){
        this.fetchTodos();
        console.log("didmount call");  
 }
}
