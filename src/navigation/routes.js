import Login from '../routes/Login';
import Register from '../routes/Register';
import Layout from '../components/layout/Layout';

import Home from '../routes/Home';
import PointCreate from '../routes/PointCreate';
import PointView from '../routes/PointView';
import Bookmarked from '../routes/Bookmarked';
 


export const routes = [
    {
        id: 1,
        path: '/home',
        Component: Home
    },
    {
        id: 2,
        path: '/puntos/crear',
        Component: PointCreate
    },
    {
        id: 3,
        path: '/puntos/:id',
        Component: PointView
    },
    {
        id: 4,
        path: '/guardados',
        Component: Bookmarked
    }
]

export {Login, Register, Layout}