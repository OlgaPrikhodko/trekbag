export default function Counter({
  numberOfItemsPacked,
  totalNumberOfItems,
}: {
  numberOfItemsPacked: number;
  totalNumberOfItems: number;
}) {
  return (
    <p>
      <strong>{numberOfItemsPacked}</strong> / {totalNumberOfItems} items packed
    </p>
  );
}
