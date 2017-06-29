import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class UserStore extends EventEmitter{
	constructor(){
		super()
		this.users = [
			{
				id:1,
				name: "Bobin Singla",
				age: 21,
				jersy:1
			},					
		];
	}


	getAll(){
		//console.log(this.users);
		return this.users;	
	}

	handleActions(action) {
		switch(action.type) {
			case "RECEIVE_USERS": {
				this.users = action.users;
				this.emit("change");
				break;
			}
			default: {
				break;
			}
		}
	}
}

const userStore = new UserStore;
dispatcher.register(userStore.handleActions.bind(userStore));

export default userStore;