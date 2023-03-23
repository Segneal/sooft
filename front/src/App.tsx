import { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App bg-[#F3F3F3] w-full min-h-[100vh]">
      <Header />
      <Body />
    </div>
  );
}

export default App;
