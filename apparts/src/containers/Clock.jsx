import { useEffect, useState } from "react";

const Clock = ({ label }) => {
  const [date, setDate] = useState(new Date().toLocaleTimeString());

  const myTimeout = () => {
    console.log("tick");
    setDate(new Date().toLocaleTimeString());
  };

  useEffect(() => {
    setTimeout(myTimeout, 1000);

    return () => {
      clearTimeout(myTimeout);
    };
  }, [date]); // uniquement componentDidMount avec componentDidUpdate

  return (
    <h2>
      {label}
      {date}
    </h2>
  );
};

export default Clock;
