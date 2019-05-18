import React from 'react';
// import logo from './logo.svg';
import './App.css';


export default class App extends React.Component{

  state={
    value:"",
    list:[],
    num:0,
    tick:"",
    

  }
  onChangehandle=(e)=>{
    this.setState({
      value:e.target.value
    })
  }

  addEvent=()=>{
    this.setState(e=>{
      const list = [e.value, ...e.list];
      return{
        list,
        value:"",
        num:this.state.num+1
        
      }
    })
  }
  onClear=()=>{
    this.setState({
      list:[],
      num:0
    })
  }
  // selectBox=()=>{
  //   this.setState({
  //     tick:
  //   }
  //     ) 
  // }
  
  // activeBox=()=>{
  //   this.setState({
  //     if 
  //   })
  // }

  render(){
    const{value,list,num,tick}=this.state
    
    return(
      <div>
            <input  type="text" placeholder="TODO" onChange={this.onChangehandle}  value={value} />
            <button onClick={this.addEvent} >add</button><br />
            <button className="filter">all</button>
            <button className="filter"onClick="activeBox" >active</button>
            <button className="filter">completed</button><br />
            <button onClick={this.onClear}>clear complete</button>
             
           {list.map(item => (
             <li>
             <label> <input type="checkbox" onChange={this.selectBox}  /> {item}</label></li>
              ))}
          <div>
          {num}{"item"}</div>
          <div>{tick}</div>
           {/* <input type="checkbox" id="checkbox_id"  /> 
          <label for="checkbox_id">{item}</label><br /> */}
          {/* {this.state.list.map(item => (
             <li><input type="checkbox" id="checkbox_id" /> 
             <label for="checkbox_id">{item}</label></li>
              ))} */}
          </div>
         
    )
  }

}
