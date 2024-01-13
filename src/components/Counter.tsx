import { useItemsContext } from "../lib/hooks";

export default function Counter() {
  const { numberOfItemsPacked, totalNumberOfItems } = useItemsContext();

  return (
    <p>
      <strong>{numberOfItemsPacked}</strong> / {totalNumberOfItems} items packed
    </p>
  );
}
