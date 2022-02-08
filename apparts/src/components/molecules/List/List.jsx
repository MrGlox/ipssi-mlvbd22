import { array } from "prop-types";

import { Item } from "components/atoms";

const List = ({ data = [] }) => (
  <ul>
    {Array.isArray(data) &&
      data.map((element, index) => (
        <Item key={"apparts" + index} {...element}>
          {element.description}
        </Item>
      ))}
  </ul>
);

List.propTypes = {
  data: array,
};

export default List;
