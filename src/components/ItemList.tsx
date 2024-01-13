import { ItemType } from "../lib/constants";

export default function ItemList({
  items,
  handleDeleteItem,
}: {
  items: ItemType[];
  handleDeleteItem: (id: number) => void;
}) {
  return (
    <ul>
      {items.map((item) => (
        <Item item={item} key={item.id} handleDeleteItem={handleDeleteItem} />
      ))}
    </ul>
  );
}

function Item({
  item,
  handleDeleteItem,
}: {
  item: ItemType;
  handleDeleteItem: (id: number) => void;
}) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => {
            item.packed = !item.packed;
          }}
        />
        {item.name}
      </label>

      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}
