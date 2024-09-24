import { useState } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App ${darkMode ? "darkMode" : ""}`}>
      <Header
        setDarkMode={setDarkMode}
        darkMode={darkMode}
      />
      <Container darkMode={darkMode} />
    </div>
  );
}

export default App;
