import Item from "./Item";

const List = ({ items = [], handleClick }) => (
  <ul>
    {items.map((item, index) => (
      <Item
        handleClick={(ev) => handleClick(ev, index)}
        key={"todoItem" + index}
        status={item.status}
      >
        {item.content}
      </Item>
    ))}
  </ul>
);

export default List;
