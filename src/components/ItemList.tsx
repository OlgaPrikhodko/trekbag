import Select from "react-select";
import { ItemType } from "../lib/constants";
import EmptyView from "./EmptyView";
import { useState } from "react";

const sortingOptions = [
  { value: "default", label: "Sort by default" },
  { value: "packed", label: "Sort by packed" },
  { value: "unpacked", label: "Sort by unpacked" },
];

type SortingOptionValue = (typeof sortingOptions)[number]["value"];

export default function ItemList({
  items,
  handleDeleteItem,
  handleToggleItem,
}: {
  items: ItemType[];
  handleDeleteItem: (id: number) => void;
  handleToggleItem: (id: number) => void;
}) {
  const [sortBy, setSortBy] = useState<SortingOptionValue>("default");
  const sortedItems = [...items].sort((a: ItemType, b: ItemType) => {
    if (sortBy === "packed") {
      return Number(b.packed) - Number(a.packed);
    }
    if (sortBy === "unpacked") {
      return Number(a.packed) - Number(b.packed);
    }
    return a.id - b.id;
  });

  return (
    <>
      <ul className="item-list">
        {!items.length && <EmptyView />}

        {items.length && (
          <section className="sorting">
            <Select
              onChange={(option) => {
                if (option) setSortBy(option.value);
              }}
              options={sortingOptions}
              defaultValue={sortingOptions[0]}
            />
          </section>
        )}

        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={handleDeleteItem}
            onToggleItem={handleToggleItem}
          />
        ))}
      </ul>
    </>
  );
}

function Item({
  item,
  onDeleteItem,
  onToggleItem,
}: {
  item: ItemType;
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
}) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => {
            onToggleItem(item.id);
          }}
        />
        {item.name}
      </label>

      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
