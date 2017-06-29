import React from "react";

export default class User extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { name, age, jersy} = this.props;

    return (
      <div>
        <li>
          <p> Name : {name} </p>
          <p> Age: {age} </p>
          <p> JersyNumber: {jersy} </p>
        </li>
      </div>
    );
  }
}
