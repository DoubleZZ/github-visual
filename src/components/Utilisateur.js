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
        const{show, userRepos} = this.state;
        if(show){
            return(
                <ul>
                    {userRepos.map(userRepo =>
                        <li><a href={userRepo.html_url}>{userRepo.name}</a></li>
                        )}
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

    async handleClick(){
        const show = true;
        const userRepos = await getUserRepos(this.props.user);

        this.setState({show, userRepos})
    }

    async componentDidMount(){
        const {user, avatar} = this.props;
        const userName = { login : user, avatar_url : avatar}
        this.setState({userName})
        /*
        // TODO : Mettre en place un onClick pour ne pas a avoir a surcharger de requetes
        const userName = await getUser(user);
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