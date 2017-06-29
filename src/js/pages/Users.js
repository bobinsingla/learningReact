import React from "react";

import User from "../components/User";
import * as UserActions from "../actions/UserActions";
import UserStore from "../stores/UserStore";

export default class Featured extends React.Component {
	constructor() {
		super();
		this.getUsers = this.getUsers.bind(this);
		this.state = {
			users: UserStore.getAll(),
		};
	}

	componentWillMount() {
		UserStore.on("change", this.getUsers);
	}

	componentWillUnmount() {
		UserStore.removeListener("change", this.getUsers);
	}

	getUsers() {
		this.setState({
			users: UserStore.getAll(),
		});
	}

	reloadUsers() {
		UserActions.reloadUsers();
	}

	reloadUsers2() {
		UserActions.reloadUsers2();
	}

	render(){
		const { users } = this.state;
		console.log(users);
		const UserComponents = users.map((user) => {
			return <User key= {user.id} {...user} />;
		});
		console.log(UserComponents);
		return(
			<div>
				<button onClick={this.reloadUsers.bind(this)}>Real Madrid!</button>
				<button onClick={this.reloadUsers2.bind(this)}>Manchester United!</button>
				<h1> Players </h1>
				<ul>{ UserComponents }</ul>
			</div>
		);
	}
}