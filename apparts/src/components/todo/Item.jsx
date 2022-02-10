const Item = ({ children, status = false, handleClick }) => (
  <li
    onClick={handleClick}
    style={
      !status ? { textDecoration: "none" } : { textDecoration: "line-through" }
    }
  >
    {children}
  </li>
);

export default Item;
