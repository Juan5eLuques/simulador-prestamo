import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Card } from "./components/Card";

function App() {
  const [prestamo, setPrestamo] = useState({
    monto: 0,
    cuotas: 0,
    montoFinal: 0,
    tasa: 0,
  });
  return (
    <div>
      <Card></Card>
    </div>
  );
}

export default App;
