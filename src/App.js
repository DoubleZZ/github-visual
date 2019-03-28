import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Informations from "./components/Informations"

class App extends Component {
  state = {
    repoName: 'TypedProject/ts-express-decorators',
    description : true,
    branches : true,
    link : true,
    collaborators: true,
  };

  handleChange(event) {
    console.log(event.target.value);
    //this.state.repoName = event.target.value;
    this.setState({repoName : event.target.value});
  }

  changeDescription(event){
    this.setState({description : event.target.checked})
  }

  changeBranches(event){
    this.setState({branches : event.target.checked})
  }

  changeLink(event){
    this.setState({link : event.target.checked})
  }

  changeCollaborators(event){
    this.setState({collaborators : event.target.checked})
  }

  renderForm(){
    return(
      <div>
        <div>
          <label>Nom du repository : </label>
          <input type="text" onChange={this.handleChange} />
          <ul>
            <li>
              <input type="checkbox" name="description" id="description" onClick={this.changeDescription} /><label for="description">Description / stars</label>
            </li>
            <li>
              <input type="checkbox" name="branches" id="branches" onChange={this.changeBranches}/><label for="branches">URL des branches</label>
            </li>
            <li>
              <input type="checkbox" name="link" id="link" onChange={this.changeLink}/><label for="link">Lien vers page Github</label>
            </li>
            <li>
              <input type="checkbox" name="collaborators" id="collaborators" onChange={this.changeCollaborators}/><label for="collaborators">Liste les collaborateurs</label>
            </li>
          </ul>
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
