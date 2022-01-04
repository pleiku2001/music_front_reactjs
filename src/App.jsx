import "./App.css";
import {
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Routes>
        <Route extra path="/" element={<Home />}/>
        <Route path="/" element={<App />}/>
      </Routes>
    </>
  );
}

export default App;
