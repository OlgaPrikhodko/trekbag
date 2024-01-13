import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContextProvider";

export function useItemsContext() {
  const itemsContext = useContext(ItemsContext);
  if (!itemsContext) {
    throw new Error(
      "useItemsContext has to used within <ItemsContext.Provider>"
    );
  }

  return itemsContext;
}
