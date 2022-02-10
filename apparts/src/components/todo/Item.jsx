const Item = ({ children, status = false }) => (
  <li
    style={
      !status ? { textDecoration: "none" } : { textDecoration: "line-through" }
    }
  >
    {children}
  </li>
);

export default Item;
