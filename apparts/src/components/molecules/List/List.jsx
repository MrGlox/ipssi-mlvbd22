import { Item } from "components/atoms";

const List = ({ data = [] }) => (
  <ul>
    {data.map((element) => (
      <Item {...element}>{element.description}</Item>
    ))}
  </ul>
);

export default List;
