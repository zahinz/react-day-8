import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Details from "./containers/Details";

function App() {
  return (
    <Routes basename={process.env.PUBLIC_URL}>
      <Route path="/details/:id" element={<Details />} />
      <Route path="/" exact element={<Home />} />
    </Routes>
  );
}

export default App;
