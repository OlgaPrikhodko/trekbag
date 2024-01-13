import { ReactNode, createContext, useEffect, useState } from "react";
import { ItemType, initialItems } from "../lib/constants";

interface ItemsContextType {
  items: ItemType[];
  handleAddItem: (itemText: string) => void;
  handleDeleteItem: (id: number) => void;
  handleToggleItem: (id: number) => void;
  handleRemoveAllItems: () => void;
  handleResetToInitial: () => void;
  handleMarkAllAsComplete: () => void;
  handleMarkAllAsIncomplete: () => void;
  numberOfItemsPacked: number;
  totalNumberOfItems: number;
}

const ItemsContext = createContext<ItemsContextType>({} as ItemsContextType);

export default function ItemsContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [items, setItems] = useState<ItemType[]>(() => {
    const itemsFromLocalStorage: ItemType[] = JSON.parse(
      localStorage.getItem("items") as string
    );
    return itemsFromLocalStorage || initialItems;
  });

  const handleAddItem = (itemText: string) => {
    const newItem = {
      id: new Date().getTime(),
      name: itemText,
      packed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleDeleteItem = (id: number) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleToggleItem = (id: number) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => ({ ...item, packed: true }));
    setItems(newItems);
  };

  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map((item) => ({ ...item, packed: false }));
    setItems(newItems);
  };

  const numberOfItemsPacked = items.filter(
    (item) => item.packed === true
  ).length;

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleDeleteItem,
        handleToggleItem,
        handleRemoveAllItems,
        handleResetToInitial,
        handleMarkAllAsComplete,
        handleMarkAllAsIncomplete,
        numberOfItemsPacked,
        totalNumberOfItems: items.length,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}

export { ItemsContext };
