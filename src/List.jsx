import { useDeferredValue } from "react";

const List = ({ items }) => {
  const def = useDeferredValue(items);

  return (
    <ul>
      {def.map((i) => (
        <li key={i.id}>{i.name}</li>
      ))}
    </ul>
  );
};

export default List;
