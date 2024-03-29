import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
    </div>
  );
}

export default App;
