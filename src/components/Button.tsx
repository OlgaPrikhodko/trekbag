import { ReactNode } from "react";

export default function Button({
  children,
  type,
}: {
  type?: "secondary";
  children: ReactNode;
}) {
  return (
    <button className={`btn ${type === "secondary" ? "btn--secondary" : ""}`}>
      {children}
    </button>
  );
}
