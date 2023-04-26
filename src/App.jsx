import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import BottomNav from "./components/BottomNav";
import Layout from "./components/layout/Layout";
import TopNav from "./components/TopNav";
import PointCreate from "./routes/PointCreate";
import PointView from "./routes/PointView";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route element={<Layout />}>        
          <Route exact path="/" element={<Home />} />
          <Route path="/puntos/crear" element={<PointCreate />} />
          <Route path="/puntos/:id" element={<PointView/>}/>
       </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
