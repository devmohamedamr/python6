import React, { Component } from 'react';
import Child from './Child';

export default class Parent extends Component {

    state={
        users:[
            {id:0,name:"mohamed",age:30,gender:"male"},
            {id:1,name:"esraa",age:10,gender:"female"},
            {id:2,name:"ramy",age:50,gender:"male"},
            {id:3,name:"omnia",age:20,gender:"female"},
        ]
    }
    removeChild = (index)=>{
        // deep copy
        let userscopy = [...this.state.users];
        userscopy =  userscopy.filter((user) => user.id !== index );
        this.setState({users:userscopy});
    }
  render() {
    return (
        <>
           <div className='container'>
            <div className='row'>
            {this.state.users.map( (user) => 
                <Child name={user.name} age={user.age} gender={user.gender} key={user.id} remove={() => this.removeChild(user.id)} /> 
            )}
            </div> 
           </div>
        </>
    );
  }
}
