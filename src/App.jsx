import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" flex flex-col h-screen items-center justify-center ">
      <h1 className=" text-blue-200 font-bold text-xl">
        React + tailwindcss template
      </h1>
      <p className="text-white">By: yeno</p>
    </div>
  );
}

export default App;
