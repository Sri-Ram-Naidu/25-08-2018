import React from 'react';
import  ReactDOM from 'react-dom';
class LifeCycleMethods extends React.Component{
  constructor(props)
  {
    super(props);
    this.change=this.change.bind(this);
    this.state={
       name : 0;
    }
  }
  change(event)
  {
    this.setState({
      name : this.state.name+1
    })
  }
  render()
  {
    return(
      <div>
      <h1>Welcome to React Js</h1>
      <button OnClick={this.change}>Increment</button>
      <Content myNumber = {this.state.name}></Content>
      </div>
    )
  }
}
class Content extends React.Component{
  componentWillMount() {
      console.log('Component WILL MOUNT!')
   }
   componentDidMount() {
      console.log('Component DID MOUNT!')
   }
   componentWillReceiveProps(newProps) {
      console.log('Component WILL RECIEVE PROPS!')
   }
   shouldComponentUpdate(newProps, newState) {
      return true;
   }
   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }
   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }
   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
   render() {
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
         </div>
      );
   }
}
export default LifeCycleMethods;
}
