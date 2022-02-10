import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// import { Button } from "./components/atoms"; // relatif
import MainContext from "contexts/Main"; // absolut
import { List, Form } from "components/molecules"; // absolut

const Apparts = () => {
  const searchParams = useSearchParams();
  const { value, filteredData, handleChange } = useContext(MainContext);

  useEffect(() => {
    searchParams[1](value.length === 0 ? "" : { filter: value });
  }, []);

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
