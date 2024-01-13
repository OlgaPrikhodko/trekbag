import Select from "react-select";
import { ItemType } from "../lib/constants";
import EmptyView from "./EmptyView";
import { useMemo, useState } from "react";
import { useItemsStore } from "../stores/itemsStore";

const sortingOptions = [
  { value: "default", label: "Sort by default" },
  { value: "packed", label: "Sort by packed" },
  { value: "unpacked", label: "Sort by unpacked" },
];

type SortingOptionValue = (typeof sortingOptions)[number]["value"];

export default function ItemList() {
  const [sortBy, setSortBy] = useState<SortingOptionValue>("default");

  const items = useItemsStore((state) => state.items);
  const deleteItem = useItemsStore((state) => state.deleteItem);
  const toggleItem = useItemsStore((state) => state.toggleItem);

  const sortedItems = useMemo(() => {
    return [...items].sort((a: ItemType, b: ItemType) => {
      if (sortBy === "packed") {
        return Number(b.packed) - Number(a.packed);
      }
      if (sortBy === "unpacked") {
        return Number(a.packed) - Number(b.packed);
      }
      return a.id - b.id;
    });
  }, [items, sortBy]);

  return (
    <>
      <ul className="item-list">
        {!items.length && <EmptyView />}

        {items.length !== 0 && (
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
            onDeleteItem={deleteItem}
            onToggleItem={toggleItem}
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
