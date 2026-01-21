import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { themeContext } from "./context/themeContext";
import HomePage from "./pages/HomePage";

function App() {
  const [mode, setMode] = useState("light");

  return (
    <>
      <themeContext.Provider value={{ mode, setMode }}>
        <HomePage />
      </themeContext.Provider>
    </>
  );
}

export default App;
