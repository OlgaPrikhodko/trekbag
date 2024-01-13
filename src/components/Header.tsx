import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({
  totalNumberOfItems,
  numberOfItemsPacked,
}: {
  totalNumberOfItems: number;
  numberOfItemsPacked: number;
}) {
  return (
    <header>
      <Logo />

      <Counter
        numberOfItemsPacked={numberOfItemsPacked}
        totalNumberOfItems={totalNumberOfItems}
      />
    </header>
  );
}
