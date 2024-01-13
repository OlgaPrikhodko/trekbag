import { secondaryButtons } from "../lib/constants";
import Button from "./Button";

export default function ButtonGroup() {
  return (
    <section className="button-group">
      {secondaryButtons.map((buttonText) => (
        <Button type="secondary" key={buttonText}>
          {buttonText}
        </Button>
      ))}
    </section>
  );
}
