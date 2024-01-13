import { useRef, useState } from "react";
import Button from "./Button";
import { useItemsContext } from "../lib/hooks";

export default function AddItemForm() {
  const { handleAddItem } = useItemsContext();

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

    handleAddItem(itemText);
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
