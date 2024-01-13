import { useRef, useState } from "react";
import Button from "./Button";
import { useItemsStore } from "../stores/itemsStore";

export default function AddItemForm() {
  const addItem = useItemsStore((state) => state.addItem);
  const [itemText, setItemText] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // basic validation
    if (!itemText) {
      alert("Item can't be empty");
      inputRef.current?.focus();
      return;
    }

    addItem(itemText);
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
