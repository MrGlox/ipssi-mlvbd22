import { Component } from "react";
import { Route, Routes } from "react-router-dom";

import "styles/App.css";

import { Link } from "components/atoms";

import Apparts from "containers/Apparts";
import Appart from "containers/Appart";
import Clock from "containers/Clock";
import Home from "containers/Home";
import Lorem from "containers/Lorem";
import Todo from "containers/Todo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/apparts">Apparts</Link>
              </li>
              <li>
                <Link to="/clock">Clock</Link>
              </li>
              <li>
                <Link to="/lorem">Lorem</Link>
              </li>
              <li>
                <Link to="/todo">Todo</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="App-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="apparts" element={<Apparts />} />
            <Route path="apparts/:slug" element={<Appart />} />
            <Route path="clock" element={<Clock label="Il est : " />} />
            <Route path="lorem" element={<Lorem />} />
            <Route path="todo" element={<Todo />} />
            <Route path="*" element={<p>There's nothing here! (404)</p>} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
