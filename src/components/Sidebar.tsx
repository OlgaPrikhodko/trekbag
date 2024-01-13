import { ItemType } from "../lib/constants";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

type SidebarProps = {
  setItems: React.Dispatch<React.SetStateAction<ItemType[]>>;
};

export default function Sidebar({ setItems }: SidebarProps) {
  return (
    <div className="sidebar">
      <AddItemForm setItems={setItems} />

      <ButtonGroup />
    </div>
  );
}
