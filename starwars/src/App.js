import React, { Component } from "react";
import "./App.scss";

import CharacterList from "./components/CharacterList";
import theme from "./theme.mp3";

class App extends Component {
  constructor() {
    super();
    this.theme = new Audio(theme);
    this.state = {
      starwarsChars: [],
      baseUrl: "https://swapi.co/api/people/?page=",
      page: 1
    };
  }

  componentDidMount() {
    this.getCharacters(`${this.state.baseUrl}${this.state.page}`);
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getNextPage = e => {
    // e.preventDefault();
    if (this.state.page >= 10) {
      this.setState({
        page: 1
      });
    } else {
      this.setState(prevState => {
        return {
          page: prevState.page + 1,
        };
      });
    }
    this.getCharacters(`${this.state.baseUrl}${this.state.page}`);
    this.theme.play();
  };

  getPrevPage = e => {
    // e.preventDefault();
    if (this.state.page <= 1) {
      this.setState({
        page: 10
      });
    } else {
      this.setState(prevState => {
        return {
          page: prevState.page - 1
        };
      });
    }
    this.getCharacters(`${this.state.baseUrl}${this.state.page}`);
    this.theme.play();
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList starwarsChars={this.state.starwarsChars} />
        <button onClick={this.getPrevPage}>Get Previous Page</button>
        <button onClick={this.getNextPage}>Get Next Page</button>
      </div>
    );
  }
}

export default App;
