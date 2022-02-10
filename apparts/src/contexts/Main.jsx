import { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

import data from "data.json";
import { useEffect } from "react/cjs/react.development";

const MainContext = createContext({
  data,
  value: "",
  filteredData: data,
});

const Provider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [value, setValue] = useState(searchParams.get("filter") || ""); // Array(getter, setter)
  const [filteredData, setFilteredData] = useState(data); // Array(getter, setter)

  const handleChange = ({ target: { value } }) => {
    setValue(value);
    setSearchParams(value.length === 0 ? "" : { filter: value });
  };

  useEffect(() => {
    setFilteredData(
      data.filter((appart) =>
        appart.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  }, [value]);

  return (
    <MainContext.Provider value={{ value, filteredData, handleChange }}>
      {children}
    </MainContext.Provider>
  );
};

export { Provider };
export default MainContext;
