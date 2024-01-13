import { ItemType } from "../lib/constants";

export default function ItemList({ items }: { items: ItemType[] }) {
  return (
    <ul>
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
  );
}

function Item({ item }: { item: { name: string; packed: boolean } }) {
  return (
    <li className="item">
      <label htmlFor="999">
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => {
            item.packed = !item.packed;
          }}
        />
        {item.name}
      </label>

      <button>❌</button>
    </li>
  );
}
