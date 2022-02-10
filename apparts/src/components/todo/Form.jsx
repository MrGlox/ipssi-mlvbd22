const Form = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="name">To do label</label>
    <input type="text" name="name" />
  </form>
);

export default Form;
