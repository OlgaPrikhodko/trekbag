import { useEffect, useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import { ItemType, initialItems } from "./lib/constants";

function App() {
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

  const markAllAsComplete = () => {
    const newItems = items.map((item) => ({ ...item, packed: true }));
    setItems(newItems);
  };

  const markAllAsIncomplete = () => {
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
    <>
      <BackgroundHeading />
      <main>
        <Header
          totalNumberOfItems={items.length}
          numberOfItemsPacked={numberOfItemsPacked}
        />
        <ItemList
          items={items}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
        <Sidebar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetToInitial={handleResetToInitial}
          markAllAsIncomplete={markAllAsIncomplete}
          markAllAsComplete={markAllAsComplete}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
