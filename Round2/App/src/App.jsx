import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Board from "./game";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[orange] w-screen h-screen justify-center text-center">
        <div className="mb-10">
          <h1 className="text-black m-10 font-bold">TIC-TAC-TOE</h1>
        </div>
        <Board />
      </div>
    </>
  );
}

export default App;
