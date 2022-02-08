import "./App.css";

// import { Button } from "./components/atoms"; // relatif
import { List } from "components/molecules"; // absolut

import Clock from "containers/Clock";

import data from "./data.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world !</h1>
        <Clock label="Il est : " />
        <List data={data} />
      </header>
    </div>
  );
}

export default App;
