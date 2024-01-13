import { StateCreator, create } from "zustand";
import { ItemType, initialItems } from "../lib/constants";
import { PersistOptions, persist } from "zustand/middleware";

type ItemsState = {
  items: ItemType[];
  addItem: (itemText: string) => void;
  deleteItem: (id: number) => void;
  toggleItem: (id: number) => void;
  removeAllItems: () => void;
  resetToInitial: () => void;
  markAllAsComplete: () => void;
  markAllAsIncomplete: () => void;
  // numberOfItemsPacked: number;
  // totalNumberOfItems: number;
};

type PersistType = (
  config: StateCreator<ItemsState>,
  options: PersistOptions<ItemsState>
) => StateCreator<ItemsState>;

export const useItemsStore = create<ItemsState>(
  (persist as PersistType)(
    (set) => ({
      items: initialItems,
      removeAllItems: () => {
        set(() => ({ items: [] }));
      },
      addItem: (itemText: string) => {
        const newItem = {
          id: new Date().getTime(),
          name: itemText,
          packed: false,
        };
        set((state) => ({ items: [...state.items, newItem] }));
      },
      deleteItem: (id: number) => {
        set((state) => {
          const newItems = state.items.filter((item) => item.id !== id);
          return { items: newItems };
        });
      },
      toggleItem: (id: number) => {
        set((state) => {
          const newItems = state.items.map((item) =>
            item.id === id ? { ...item, packed: !item.packed } : item
          );
          return { items: newItems };
        });
      },
      resetToInitial: () => {
        set(() => ({ items: initialItems }));
      },
      markAllAsComplete: () => {
        set((state) => {
          const newItems = state.items.map((item) => ({
            ...item,
            packed: true,
          }));
          return { items: newItems };
        });
      },
      markAllAsIncomplete: () => {
        set((state) => {
          const newItems = state.items.map((item) => ({
            ...item,
            packed: false,
          }));
          return { items: newItems };
        });
      },
      numberOfItemsPacked: () => {},
    }),
    { name: "items" }
  )
);
