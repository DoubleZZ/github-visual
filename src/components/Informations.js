import React, { Component } from 'react';
import { getRepo, getContributors, getBranches } from '../services/getInformations';
import "./Informations.css";
import Utilisateur from "./Utilisateur"

export default class Informations extends Component {
    state = {
        repoName : [],
        contributors : [],
        branches : [],
    }

    componentDidMount(){
        const {repo} = this.props;
        this.fetch(repo)
    }

    componentDidUpdate(prevProps) {
        console.log('==>', this.props.repo !== prevProps.repo)
        if (this.props.repo !== prevProps.repo) {

            this.fetch(this.props.repo);
        }
    }

    async fetch(repo) {
        const repoName = await getRepo(repo);
        const contributors = await getContributors(repo);
        const branches = await getBranches(repo);
        console.log('==>', contributors)
        this.setState({repoName, contributors, branches});
    }

    showDescription(){
        const{description} = this.props;
        const{repoName} = this.state;
        if(description){
            return(
                <h3>{repoName.description}</h3>
            )
        }
        else{
            return(
                <h3></h3>
            )
        }
    }

    showBranches(){
        const{branches} = this.state;
        if (this.props.branches){
            return(
                <div className="branches">
                    <ul>
                    { branches.map(branche =>
                    <li>
                        <a href={this.state.repoName.html_url + "/tree/" + branche.name} key={branche.node_id}>{branche.name}</a>
                    </li>
	  			)}
                    </ul>
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

    render(){
        const {repoName, contributors} = this.state;
        return(
            <div className="informations">
                <div className="general">
                    <h2>{repoName.name}</h2>
                    {this.showDescription()}
                </div>

                {this.showBranches()}

                <div className="contributors">
                { contributors.map(contributor =>
                    <Utilisateur user={contributor.login} avatar={contributor.avatar_url} key={contributor.node_id} />
	  			)}
                </div>
            </div>
        )
    } 
}