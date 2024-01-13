import Button from "./Button";

type ButtonGroupProps = {
  handleRemoveAllItems: () => void;
  handleResetToInitial: () => void;
  markAllAsIncomplete: () => void;
  markAllAsComplete: () => void;
};

export default function ButtonGroup({
  handleRemoveAllItems,
  handleResetToInitial,
  markAllAsComplete,
  markAllAsIncomplete,
}: ButtonGroupProps) {
  const secondaryButtons = [
    { text: "Mark all as complete", onClick: markAllAsComplete },
    { text: "Mark all as incomplete", onClick: markAllAsIncomplete },
    { text: "Reset to initial", onClick: handleResetToInitial },
    { text: "Remove all items", onClick: handleRemoveAllItems },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map(({ text, onClick }) => (
        <Button onClickHandler={onClick} buttonType="secondary" key={text}>
          {text}
        </Button>
      ))}
    </section>
  );
}
