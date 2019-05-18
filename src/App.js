import React from 'react';
import logo from './logo.svg';
import './App.css';


export default class App extends React.Component {
  render(){
    return(
      <div>
      <Heading title="Welcome to React Transportation" title2="Choose Options" />
      <Detail  title="cars" list={[
        {year: 2013, model: "A", price: "$32000"},
        {year: 2011, model: "B", price: "$4400"},
      {year: 2016, model: "B", price: "$15500"}
      ]} />
      <Detail title = "Trucks" list = {[
       {year: 2014, model: "D", price: "$18000"},
       {year: 2013, model: "E", price: "$5200"}
     ]}/>
     <Detail title = "Convertibles" list = {[
       {year: 2009, model: "F", price: "$2000"},
       {year: 2010, model: "G", price: "$6000"},
       {year: 2012, model: "H", price: "$12500"},
       {year: 2017, model: "M", price: "$50000"}
     ]}/>
        </div>
    )
  }
}


class Heading extends React.Component{

  render(){
    return(
      <div>
        <h2>{this.props.title}</h2>
        <p>The best place to buy vehicles online</p>
        <h2>{this.props.title2}</h2>
        New only<input type="checkbox" id="coding" name="interest" value="value" />

        <div>select type
        <select name='stuff' >
        <option value="0" >all</option>
        <option value="1"  >cars</option>
        <option value="2" >trucks</option>
        <option value="3" >convertiable</option>
        </select></div>
        </div>
    )

  }
}
class Detail extends React.Component{
  render(){

    return(

      <div>
      <h2>{this.props.title}</h2>
      <ListItem list = {this.props.list[0]}/>
      <ListItem list = {this.props.list[1]}/>
      <ListItem list = {this.props.list[2]}/>
      <ListItem list = {this.props.list[3]}/>
    </div>
    )
  }
}

class ListItem extends React.Component{
  render(){
    if (this.props.list) {
  return (
    <ul>
        <table >
            <tr>
                <th>Year</th>
                <th>Model</th>
                <th>Price</th>
                <th>Buy</th>
            </tr>
            <tr>
                <td>{this.props.list.year}</td>
                <td>{this.props.list.model}</td>
                <td>{this.props.list.price}</td>
                <td><button>Buy Now</button></td>
            </tr>
        </table>
    </ul>
  )
} else {
  return null
}
}
}
