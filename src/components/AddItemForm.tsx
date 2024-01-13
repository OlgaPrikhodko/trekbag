import { useRef, useState } from "react";
import Button from "./Button";
import { ItemType } from "../lib/constants";

export default function AddItemForm({
  setItems,
}: {
  setItems: React.Dispatch<React.SetStateAction<ItemType[]>>;
}) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = () => (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // basic validation
    if (!itemText) {
      alert("Item can't be empty");
      inputRef.current?.focus();
    }

    const newItem = {
      id: new Date().getTime(),
      name: itemText,
      packed: false,
    };
    setItems((prevItems) => [...prevItems, newItem]);
    setItemText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        type="text"
        value={itemText}
        onChange={(e) => setItemText(e.target.value)}
        autoFocus
      />
      <Button>Add to list</Button>
    </form>
  );
}
