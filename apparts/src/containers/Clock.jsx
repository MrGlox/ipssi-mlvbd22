import { useEffect, useState } from "react";

const Clock = ({ label }) => {
  const [date, setDate] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = () => {
      setDate(new Date().toLocaleTimeString());
    };

    setInterval(interval, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []); // uniquement componentDidMount

  return (
    <h2>
      {label}
      {date}
    </h2>
  );
};

export default Clock;
