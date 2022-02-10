import { useState } from "react";

import { TodoList, TodoForm } from "components/todo";

const Todo = () => {
  //   const [value, setValue] = useState("");
  const [data, setData] = useState([
    { content: "Acheter du pain", status: false },
    { content: "Acheter du beurre", status: false },
    { content: "Acheter de la confiture", status: false },
  ]);

  const handleSubmit = (ev) => {
    ev.preventDefault(); // évite l'envoi du formulaire
    if (ev.target[0].value === "") return; // condition de sortie pour éviter l'envoi en cas de champs vide

    setData(
      (
        prev // récupération de la valeur avant modification
      ) => [
        ...prev, // injection de toutes les valeurs
        { content: ev.target[0].value, status: false }, // ajout d'une nouvelle valeur
      ]
    );
  };

  const handleClick = (ev, index) => {
    setData((prev) => {
      // Sauvegarde de l'élément en modification
      const editedItem = {
        ...prev[index], // injection de toutes les clés/valeurs { content: "Acheter de la confiture", status: false },
        status: !prev[index].status, // écrasement de la valeur actuelle avec son inverse pour un "toggle"
      };

      prev[index] = editedItem; // écrasement de l'objet concerné

      return [...prev]; // envoi au setData du nouveau tableau reconstitué
    });
  };

  return (
    <>
      <h1>Ma super todo</h1>
      <TodoForm handleSubmit={handleSubmit}></TodoForm>
      <TodoList items={data} handleClick={handleClick} />
    </>
  );
};

export default Todo;
