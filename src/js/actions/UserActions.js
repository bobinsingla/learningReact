import dispatcher from "../dispatcher";

export function reloadUsers() { 
  //dispatcher.dispatch({type: "FETCH_USERS"});

  dispatcher.dispatch({type: "RECEIVE_USERS", users: [
    {
      id: 2,
      name: "Cristiano Ronaldo",
      age: 32,
      jersy : 7
    },
    {
      id: 3,
      name: "Bezema",
      age: 29,
      jersy: 9
    },
     {
      id: 4,
      name: "Bale",
      age: 28,
      jersy : 11
    },
    {
      id: 5,
      name: "Ramos",
      age: 32,
      jersy: 4
    },
  ]});  
}

export function reloadUsers2() { 
  //dispatcher.dispatch({type: "FETCH_USERS"});

  dispatcher.dispatch({type: "RECEIVE_USERS", users: [
    {
      id: 6,
      name: "Wayne Rooney",
      age: 32,
      jersy : 10
    },
    {
      id: 7,
      name: "Paul Pogba",
      age: 24,
      jersy : 6
    },
    {
      id: 8,
      name: "David De Gea",
      age: 26,
      jersy : 1
    },
    {
      id: 9,
      name: "Rashford",
      age: 19,
      jersy : 19
    },
  ]});  
}
