import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

type SidebarProps = {
  handleAddItem: (itemText: string) => void;
  handleRemoveAllItems: () => void;
  handleResetToInitial: () => void;
  markAllAsIncomplete: () => void;
  markAllAsComplete: () => void;
};

export default function Sidebar({
  handleAddItem,
  handleRemoveAllItems,
  handleResetToInitial,
  markAllAsComplete,
  markAllAsIncomplete,
}: SidebarProps) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />

      <ButtonGroup
        handleRemoveAllItems={handleRemoveAllItems}
        handleResetToInitial={handleResetToInitial}
        markAllAsIncomplete={markAllAsIncomplete}
        markAllAsComplete={markAllAsComplete}
      />
    </div>
  );
}
