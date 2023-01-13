import React from 'react'
import { useAuth } from '../App';
import { useLocation, Navigate } from 'react-router-dom';

type Props = {
    children: JSX.Element
}

export const AuthenticatedRoute = ({ children }: Props) => {
    //Detectar si un usuario esta logeado
    // if true -> Debe acceder a la ruta definida
    // false -> Debe ser redirigido a la ruta /login

    const auth = useAuth();
    const location = useLocation();

    if (!auth.user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children;
}

export default AuthenticatedRoute;
