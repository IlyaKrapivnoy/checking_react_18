import List from "./List";
import { useState, useTransition } from "react";

function App() {
  const source = new Array(12000)
    .fill("")
    .map((_, i) => ({ id: i, name: `Item ${i + 1}` }));

  const filterItems = (filter) => {
    return filter ? source.filter((i) => i.name.includes(filter)) : source;
  };

  const [filter, setFilter] = useState("");
  const [isPending, startTransition] = useTransition();

  const changeHandler = (e) => {
    startTransition(() => {
      setFilter(e.target.value);
    });
  };

  const items = filterItems(filter);

  return (
    <>
      <div className="container">
        <h1>React 18</h1>

        <input type="text" onChange={changeHandler} />
        {isPending && <h2>Changing state</h2>}
        <List items={items} />
      </div>
    </>
  );
}

export default App;
