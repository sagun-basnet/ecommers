import React, { useState } from "react";
import "../App.css";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function List({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      <h1>{heading}</h1>
      {items.length === 0 && <h1 style={{ color: "red" }}>No item found</h1>}
      <ul>
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? "active" : ""}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
