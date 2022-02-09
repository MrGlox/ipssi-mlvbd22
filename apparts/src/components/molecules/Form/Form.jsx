const Form = ({ value, handleChange }) => (
  <>
    <input
      type="text"
      defaultValue={value} // équivalent value mais en non bloquant
      onChange={handleChange}
    />
    <p>{value}</p>
  </>
);

export default Form;
