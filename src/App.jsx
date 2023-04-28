import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Layout from "./components/layout/Layout";
import PointCreate from "./routes/PointCreate";
import PointView from "./routes/PointView";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}/>  
      <Route element={<Layout />}>        
          <Route path="/home" element={<Home />} />
          <Route path="/puntos/crear" element={<PointCreate />} />
          <Route path="/puntos/:id" element={<PointView/>}/>
       </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;