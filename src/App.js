import "./styles.css";
import Button from "./Button";
import { restaurants } from "./data";

export default function App() {
  return (
    <div className="App">
      <Button selections={restaurants} />
      <span className="mdc-evolution-chip-set" role="grid">
        <span
          className="mdc-evolution-chip-set__chips"
          role="presentation"
        ></span>
      </span>
    </div>
  );
}
