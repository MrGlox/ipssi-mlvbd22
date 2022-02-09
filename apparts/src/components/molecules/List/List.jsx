import { array } from "prop-types";

import { Item } from "components/atoms";

const List = ({ data = [] }) => {
  if (data && data.length === 0) return <>Not found</>;

  return (
    <ul>
      {Array.isArray(data) &&
        data.map((element, index) => (
          <Item key={"apparts" + element.id} {...element}>
            {element.description}
          </Item>
        ))}
    </ul>
  );
};

List.propTypes = {
  data: array,
};

export default List;
