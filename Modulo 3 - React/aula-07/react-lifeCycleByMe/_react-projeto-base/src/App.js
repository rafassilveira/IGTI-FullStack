import React, { Component } from "react";
import Users from "./components/users/Users";
import Toggle from "./components/toggle/Toggle";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      showUsers: false,
    };
  }
  //componentDidMount é  um lugar para inserir requisições visto que  será feito
  //  apenas uma vez o render
  async componentDidMount() {
    const res = await fetch(
      "https://randomuser.me/api/?seed=rush&nat=br&results=10"
    );
    const json = await res.json();
    console.log(json);

    this.setState({
      users: json.results,
    });
  }

  // event é a variavel qe chega com o método onChange
  handleShowUsers = (isChecked) => {
    this.setState({ showUsers: isChecked });
  };
  render() {
    const { showUsers, users } = this.state;

    return (
      <div>
        <h3>React Life Cicle</h3>
        <Toggle
          description={"mostrar usuários:"}
          enabled={showUsers}
          onToggle={this.handleShowUsers}
        />
        <hr />
        {showUsers && <Users users={users} />}
      </div>
    );
  }
}
