import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Characters } from "./pages/Characters";
import { Episod } from "./pages/Episod";
import { Location } from "./pages/Location";

function App() {

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/episode" element={<Episod />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
