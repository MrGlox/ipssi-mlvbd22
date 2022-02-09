import { useState } from "react";

// import { Button } from "./components/atoms"; // relatif
import { List, Form } from "components/molecules"; // absolut

import data from "data.json";

const Apparts = () => {
  const [value, setValue] = useState("test"); // Array(getter, setter)
  const [filteredData, setFilteredData] = useState(data); // Array(getter, setter)

  const handleChange = ({ target: { value } }) => {
    setValue(value);
    setFilteredData(
      data.filter((appart) =>
        appart.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Apparts</h1>
        <Form value={value} handleChange={handleChange} />
        <List data={filteredData} />
      </header>
    </div>
  );
};

export default Apparts;
