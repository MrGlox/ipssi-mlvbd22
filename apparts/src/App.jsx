import "./App.css";

import { Button, Link } from "./components/atoms"; // relatif
import { List } from "components/molecules";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world !</h1>
        <List data={data} />
      </header>
    </div>
  );
}

export default App;
