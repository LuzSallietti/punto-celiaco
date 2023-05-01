import { Navigate, Outlet } from 'react-router'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext'

export const ProtectedRoutes = () => {
    const { state } = useContext(UserContext);
    return state.isLogged ? <Outlet /> : <Navigate to="/login" />;
};