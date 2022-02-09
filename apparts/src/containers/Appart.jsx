import { useParams } from "react-router-dom";

import { slugify } from "utils";

import data from "data.json";

const Appart = () => {
  const { slug } = useParams();
  const { title, description } = data.find(
    (element) => slugify(element.title) === slug
  );

  return (
    <>
      <h1>Appart details</h1>
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );
};

export default Appart;
