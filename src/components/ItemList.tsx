import { ItemType } from "../lib/constants";
import EmptyView from "./EmptyView";

export default function ItemList({
  items,
  handleDeleteItem,
  handleToggleItem,
}: {
  items: ItemType[];
  handleDeleteItem: (id: number) => void;
  handleToggleItem: (id: number) => void;
}) {
  return (
    <>
      <ul className="item-list">
        {!items.length && <EmptyView />}

        {items.map((item) => (
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
