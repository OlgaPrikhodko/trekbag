const initialItems = [
  { name: "good mood", packed: true },
  { name: "passport", packed: true },
  { name: "phone charger", packed: true },
];

export default function ItemList() {
  return (
    <ul>
      {initialItems.map((item) => (
        <Item item={item} key={item.name} />
      ))}
    </ul>
  );
}

function Item({ item }: { item: { name: string; packed: boolean } }) {
  return (
    <li className="item">
      <label htmlFor="999">
        <input type="checkbox" value={item.packed} />
        {item.name}
      </label>
    </li>
  );
}
