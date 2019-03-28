import React, { Component } from 'react';
import { getUser, getUserRepos } from '../services/getInformations';
import "./Utilisateur.css";
import logo from '../logo.svg';

export default class Utilisateur extends Component {
    state = {
        userName : [],
        userRepos : [],
        show : false,
    }

    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this);
    }

    renderUserRepos(){
        const{show} = this.state;
        if(show){
            return(
                <ul>
                    <li>Phrase 1</li>
                    <li>Phrase 2</li>
                    <li>Phrase 3</li>
                    <li>Phrase 4</li>
                    <li>Phrase 5</li>
                </ul>
            )
        }
        else{
            return(
                <div>

                </div>
            )
        }
    }

    handleClick(){
        const show = true;
        this.setState({show})
    }

    async componentDidMount(){
        const {user, avatar} = this.props;
        const userName = { login : user, avatar_url : avatar}
        this.setState({userName})
        /*
        // TODO : Mettre en place un onClick pour ne pas a avoir a surcharger de requetes
        const userName = await getUser(user);
        const userRepos = await getUserRepos(user);
        this.setState({userName, userRepos});
        */
    }

    render(){
        const{userName, userRepos, info} = this.state;

        return(
            <fieldset onClick={this.handleClick}>
	  			<legend>{userName.login}</legend>
	  			<img src={userName.avatar_url} alt="avatar"/>
                {this.renderUserRepos()}
	  		</fieldset>
        )
        
    }
}