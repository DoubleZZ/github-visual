import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Informations from "./components/Informations"

class App extends Component {
  state = {
    repoName: 'TypedProject/ts-express-decorators',
    description : false,
    branches : false,
    link : false,
    collaborators: false,
  };

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.changeDescription = this.changeDescription.bind(this);
    this.changeBranches = this.changeBranches.bind(this);
    this.changeLink = this.changeLink.bind(this);
    this.changeCollaborators = this.changeCollaborators.bind(this);
    this.refInputSearch = React.createRef();
  }

  handleClick(event){
    const repoName = this.refInputSearch.current.value
    console.log('current', repoName)
    this.setState({ repoName });
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
          <input type="text" value={this.state.value} ref={this.refInputSearch}  />
          <button onClick={this.handleClick}>Envoyer requete</button>
          <ul>
            <li>
              <input type="checkbox" name="description" id="description" onClick={this.changeDescription} /><label for="description">Description / stars</label>
            </li>
            <li>
              <input type="checkbox" name="branches" id="branches" onClick={this.changeBranches}/><label for="branches">URL des branches</label>
            </li>
            <li>
              <input type="checkbox" name="link" id="link" onClick={this.changeLink}/><label for="link">Lien vers page Github</label>
            </li>
            <li>
              <input type="checkbox" name="collaborators" id="collaborators" onClick={this.changeCollaborators}/><label for="collaborators">Liste les collaborateurs</label>
            </li>
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {repoName, description, branches, link, collaborators} = this.state;
    return (
      <div className="App">
        {this.renderForm()}
        <Informations repo={repoName} description={description} branches={branches} />
      </div>
    );
  }
}

export default App;
