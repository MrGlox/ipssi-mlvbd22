import { Component } from "react";

// import { Button } from "./components/atoms"; // relatif
import { List, Form } from "components/molecules"; // absolut

import data from "data.json";

class App extends Component {
  state = {
    filteredData: data,
    value: "test",
  };

  handleChange = ({ target: { value } }) => {
    this.setState({
      value,
      filteredData: data.filter((appart) =>
        appart.title.toLowerCase().includes(value.toLowerCase())
      ),
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Apparts</h1>
          <Form value={this.state.value} handleChange={this.handleChange} />
          <List data={this.state.filteredData} />
        </header>
      </div>
    );
  }
}

export default App;
