import { useState } from "react";

import { TodoList, TodoForm } from "components/todo";

const Todo = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([
    { content: "Acheter du pain", status: false },
    { content: "Acheter du beurre", status: false },
    { content: "Acheter de la confiture", status: false },
  ]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("handleSubmit", ev.target[0].value);

    setData((prev) => prev);
  };

  return (
    <>
      <h1>Ma super todo</h1>
      <TodoForm handleSubmit={handleSubmit}></TodoForm>
      <TodoList items={data} />
    </>
  );
};

export default Todo;
