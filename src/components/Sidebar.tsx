import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

type SidebarProps = {
  handleAddItem: (itemText: string) => void;
};

export default function Sidebar({ handleAddItem }: SidebarProps) {
  return (
    <div className="sidebar">
      <AddItemForm handleAddItem={handleAddItem} />

      <ButtonGroup />
    </div>
  );
}
