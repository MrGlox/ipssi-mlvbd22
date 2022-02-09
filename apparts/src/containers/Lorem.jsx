import { useEffect, useState } from "react";

const Lorem = () => {
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    try {
      const response = await fetch(
        "https://baconipsum.com/api/?type=meat-and-filler"
      );
      const data = await response.json();

      setData(data);
      setLoading(false);
    } catch (err) {
      setError(true);
      throw err;
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  if (hasError) return <p>Error...</p>; // CONDITION DE SORTIE

  return (
    <>
      <h1>Lorem</h1>
      {isLoading ? <p>Loading...</p> : <p>{data}</p>}
    </>
  );
};

export default Lorem;
