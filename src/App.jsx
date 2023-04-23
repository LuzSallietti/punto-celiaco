import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import BottomNav from "./components/BottomNav";
import TopNav from "./components/TopNav";
import PointCreate from "./routes/PointCreate";

const App = () => {
  return (
    <BrowserRouter>
      <TopNav />
      <Routes>        
        <Route exact path="/" element={<Home />} />
        <Route path="/puntos/crear" element={<PointCreate />} />
      </Routes>
      <BottomNav />
    </BrowserRouter>
  );
};

export default App;
