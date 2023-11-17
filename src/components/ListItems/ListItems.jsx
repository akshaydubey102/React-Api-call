import { useEffect } from "react";
import List from "../List/List";
import { useState } from "react";

const ListItems = () => {
  //const URLL = "https://jsonplaceholder.typicode.com/todos";

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return <List val={items} />;
};

export default ListItems;
