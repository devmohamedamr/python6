import React, { Component } from 'react';

export default class Home extends Component {

  users = [];

  state = {
      user:{
        username:"",
        age:""
      }
  }

  // onchange
  handleForm = (e)=>{
    // deep copy
    let userForm = {...this.state.user}
    
    userForm[e.target.name] = e.target.value;

    this.setState({user:userForm});
  }

  // onsubmit
  saveUser = (e)=>{
    e.preventDefault();
    this.users.push(this.state.user);
    console.log( this.users);
  }


  render() {
    return (
      <>
        <div> hi {this.state.user.username} </div>
        <form onSubmit={this.saveUser}>
          <input name='username' onChange={this.handleForm} />
          <input name='age' onChange={this.handleForm} />
          <button>click</button>
        </form>
      </>
    );
  }
}
