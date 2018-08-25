import React from 'react';
import ReactDOM from 'react-dom';
import './rams.css';
import LifeCycleMethods from './components/lifecYcleMethods.js;'
class Demo extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name : 'sriramnaidu'
    }
  }
  render(){
    return(
      <div className='ram'>
      <p>Your Name Is :  {this.state.name}</p>
      </div>
    )
  }
}

//setState
class Demo1 extends React.Component{
  constructor(props){
    super(props);
    this.change=this.change.bind(this);
    this.state={
      name:'bannu'
    }
  }
  change(event){
    this.setState({
      name : "Sriramnaidu"
    })
  }
  render(){
    return(
      <div className="sriram">
      <p>Welcome To ReactJs</p>
      <h1>Your Name is {this.state.name}</h1>
      <button onClick={this.change}>Click</button>
      </div>
    )
  }
}
//States , Events And Managed Controls
class Demo3 extends React.Component{
  constructor(props){
    super(props);
    //this.change=this.change.bind(this);
    this.state={
      message :''
    }
  }
  change(event){
    this.setState({
      message : event.target.value
    })
  }
  render(){
    return(
      <div className="sriramnaidu">
      <p>Welcome to ReactJs</p>
      <input onChange={this.change.bind(this)} value={this.state.message} />
      <h1>{this.state.message}</h1>
      </div>
    )
  }
}
//props : props are used to pass data from prent component to child Component
class parentComponent extends React.Component{
  sayHello(){
    console.log("Hello Frieends How Are U all");
  }
  render(){
    return(
      <div>
      <Child title="Hi Firends" text="This Is Sriramnaidu" onClick={this.sayHello}/>
      <Child title="How Are U All" text="this is Ram" onClick={this.sayHello}/>
      </div>
    )
  }
}
class Child extends React.Component{
  render(){
    return(
      <div className="Bannu">
      <h1>{this.props.title}</h1>
      <h2>{this.props.text}</h2>
        </div>

    )
  }
}
//PropTypes : which type of props we are needed thats why we are using PropTypes
class Demo4 extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name : 'Sriramnaidu',
      email : 'Sriram1491@gmail.com',
      mobile : 8884653083
    }
  }
  render()
  {
    return(
      <div>
      <p>welcome To React Js</p>
      </div>
    )
  }
}
class Demo5 extends React.Component{
  render(){
    return(
      <div>
      <Demo4 />
      <p>{this.props.name}</p>
      <p>{this.props.email}</p>
      <p>{this.props.mobile}</p>
      </div>
    )
  }

ReactDOM.render(<Demo5 />,document.getElementById("r4"));
ReactDOM.render(<Child />,document.getElementById("r3"));
ReactDOM.render(<Demo3 />,document.getElementById("r2"));
ReactDOM.render(<Demo1 />,document.getElementById('r1'));
ReactDOM.render(<Demo />,document.getElementById('root'));
