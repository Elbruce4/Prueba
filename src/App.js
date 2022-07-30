import Home from "./components/Home";
import { Routes , Route } from "react-router-dom";
import Model from "./components/Model";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/:modelId" element={<Model/>}/>
      </Routes>
    </div>
  );
}

export default App;
