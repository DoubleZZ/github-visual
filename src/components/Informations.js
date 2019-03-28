import React, { Component } from 'react';
import { getRepo, getContributors } from '../services/getInformations';
import "./Informations.css";

export default class Informations extends Component {
    state = {
        repoName : [],
        contributors : [],
    }

    async componentDidMount(){
        const {repo} = this.props;
        const repoName = await getRepo(repo);
        const contributors = await getContributors(repo);
        this.setState({repoName, contributors});
    }

    async componentDidCatch(){
        const {repo} = this.props;
        alert(repo);
    }

    render(){
        const{repo} = this.props;
        const{repoName, contributors} = this.state;
        return(
            <div className="informations">
                <div className="general">
                    <h2>{repoName.name}</h2>
                    <h3>{repoName.description}</h3>
                </div>

                <div className="contributors">
                { this.state.contributors.map(contributor =>
	  				<fieldset>
	  					<legend>{contributor.login}</legend>
	  					<img src={contributor.avatar_url} alt="avatar"/>
	  				</fieldset>
	  			)}
                </div>
            </div>
        )
    } 
}