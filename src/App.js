
import './App.css';
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import Table from './components/Table';
import { Component } from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

class App extends Component{
  constructor(){
    super();
    this.state={
      name:'',
      time:'',
      isAlreadyToasted : false,
      isExpired: false,
      todos:[]
    }
    this.taskChecker();
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    let todos = [...this.state.todos];
    let isExpired = false;
    if(Date.parse(this.state.time) < (new Date())){
      isExpired = true;
    }
    todos.push({name:this.state.name,time:this.state.time, isExpired: isExpired, isAlreadyToasted: false});
    this.setState({todos, name:'', time:''});
  }


  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;
    //console.log(input);
    this.setState({
      [name]: value
    })
  };

  taskChecker = ()=>{
    setInterval(() => {
      let todos = [];
      this.state.todos.forEach(x=>{
        if(Date.parse(x.time) < (new Date())){
          if(!x.isAlreadyToasted){
            toast('Task ' + x.name + ' is completed.', {autoClose : 10000});
          }
        }
        todos.push({name:x.name
          ,time:x.time
          ,isAlreadyToasted: Date.parse(x.time) < (new Date())
          , isExpired: Date.parse(x.time) < (new Date())})
      });
      this.setState({todos, isAlreadyToasted: false, isExpired : false});
      //console.log(this.state.todos);
      //console.log(this.state.todos);
      //console.log('test')
    }, 1000);
  };

  render() {
    return (
      <div className="App">
        <Form handleFormSubmit={ this.handleFormSubmit } 
          handleInputChange={ this.handleInputChange }
          name={ this.state.name }
          time={ this.state.time } />
        <Table items={ this.state.todos }/>
        
      </div>
    );
  }
}


export default App;
