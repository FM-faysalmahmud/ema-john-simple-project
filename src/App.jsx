import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header/Header";
import SHop from "./components/Shop/SHop";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header></Header>
      <SHop></SHop>
    </div>
  );
}

export default App;
