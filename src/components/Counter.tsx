export default function Counter({
  totalNumberOfItems,
  numberOfItemsPacked,
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
