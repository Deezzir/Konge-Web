import "./App.css";
import { Block1 } from "./blocks/block1";
import { Block2 } from "./blocks/block2";
import { Block3 } from "./blocks/block3";

function App() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <Block1 />
      <Block2 />
      <Block3 />
    </div>
  );
}

export default App;
