import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { routes, Login, Register, Layout } from "./navigation/routes";
import { ProtectedRoutes } from "./navigation/ProtectedRoutes";
import UserContextProvider from "./context/UserContext";

const App = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register/>}/>
          <Route element={<ProtectedRoutes />}>
            <Route element={<Layout />}>
              {routes.map(({ id, path, Component }) => (
                <Route key={id} path={path} element={<Component />} />
              ))}
            </Route>
          </Route>
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
};

export default App;
