import React, {Component} from 'react';

class ErrorBoundery extends Component{
  state = {
    hasError: false,
    errorMessage: ''
  }
  componentDidCatch = (error, info){
    this.setState({hasError: true, errorMessage: error})
  }
  render(){
      if(this.state.hasError){
        return <h1>Something Went Wrong</h1>
      }else{
        return this.props.children;
      }
  }
}

export default ErrorBoundery;
