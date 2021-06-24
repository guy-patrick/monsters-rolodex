import React, { Component } from "react";
import { SearchBox } from "../components/SearchBox";
import { CardList } from "../components/CardList";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  handleInput = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.data)
      .then((data) => this.setState({ monsters: data }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox handleInput={this.handleInput} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
