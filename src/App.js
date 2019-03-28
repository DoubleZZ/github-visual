import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Informations from "./components/Informations"

class App extends Component {
  state = {
    repoName: 'TypedProject/ts-express-decorators',
  };

  handleChange(event) {
    this.setState({repoName : event.target.value});
  }

  renderForm(){
    return(
      <div>
        <div>
          <label>Nom du repository : </label>
        </div>
      </div>
    )
  }

  render() {
    const {repoName} = this.state;
    return (
      <div className="App">
        {this.renderForm()}
        <Informations repo={repoName}/>
      </div>
    );
  }
}

export default App;
