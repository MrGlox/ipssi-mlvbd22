import { Link } from "react-router-dom";

import { slugify } from "utils";

import "./Item.css";

const Item = ({ title, status = false, children }) => (
  <li>
    <h2>
      <Link to={"/apparts/" + slugify(title)}>
        {title} <span className={`dot ${status && "dot--active"}`}></span>
      </Link>
    </h2>
    <p>{children}</p>
  </li>
);

export default Item;
