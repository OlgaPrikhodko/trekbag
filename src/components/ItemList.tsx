import { initialItems } from "../lib/constants";

export default function ItemList() {
  return (
    <ul>
      {initialItems.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
  );
}

function Item({ item }: { item: { name: string; packed: boolean } }) {
  return (
    <li className="item">
      <label htmlFor="999">
        <input type="checkbox" checked={item.packed} />
        {item.name}
      </label>
    </li>
  );
}
