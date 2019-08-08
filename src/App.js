import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      mylifeisCool:23
    }
  }

  handleclick =()=>{
    this.setState({mylifeisCool:this.state.mylifeisCool + 1})
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           {this.state.mylifeisCool}
          </p>
          <button
            onClick={this.handleclick}
          >
            Please help Me Increments
          </button>
        </header>
      </div>
    );

  }
 
}

export default App;
