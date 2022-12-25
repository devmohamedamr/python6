import React, { Component } from 'react';

export default class Child extends Component {

  componentWillUnmount(){
    console.log("componentWillUnmount");
  }
  render() {

    let {name,age,gender,remove} = this.props;
    return (
      <>
       
            <div className={ 'col-md-3 m-1 border ' + (gender === "male" ? "border-warning" : "border-primary") }>
                <h1>{name}</h1>
                <h2>{age}</h2>
                <h3>{gender}</h3>
                <button onClick={remove} className='btn btn-outline-primary m-1'>remove</button>
            </div>
      
      </>
    );
  }
}
