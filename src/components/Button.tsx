import { ReactNode } from "react";

export default function Button({
  children,
  buttonType,
  onClickHandler,
}: {
  buttonType?: "secondary";
  children: ReactNode;
  onClickHandler?: () => void;
}) {
  return (
    <button
      onClick={onClickHandler}
      className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}
    >
      {children}
    </button>
  );
}
