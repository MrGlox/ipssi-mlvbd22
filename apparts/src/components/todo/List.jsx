import Item from "./Item";

const List = ({ items = [] }) => (
  <ul>
    {items.map((item, index) => (
      <Item key={"todoItem" + index} status={item.status}>
        {item.content}
      </Item>
    ))}
  </ul>
);

export default List;
