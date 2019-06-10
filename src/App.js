import React,{Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
class App extends Component {
  render(){
    return (
      <div className="App">
       <h1>Age<span>{this.props.age}</span></h1>
       <button onClick={this.props.Age_Up}>Age Up</button>
       <button onClick={this.props.Age_Down}>Age Down</button>
      </div>
    );
  }
  
}
const mapStateToProps = (state)=>{
  return{
    age: state.age,
    loading :state.loading
  }
}
  const mapDispatchToProps = (dispatch)=>{
    return{
      Age_Up :() =>{dispatch({type:"AGE_UP",val:1})},
      Age_Down :() =>{dispatch({type:"AGE_DOWN",val:1})}
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(App);
