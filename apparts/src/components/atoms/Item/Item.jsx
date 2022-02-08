import "./Item.css";

const Item = ({ title, status = false, children }) => (
  <li>
    <h2>
      {title} <span className={`dot ${status && "dot--active"}`}></span>
    </h2>
    <p>{children}</p>
  </li>
);

export default Item;
