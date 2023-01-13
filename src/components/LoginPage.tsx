import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../App';

export const LoginPage = () => {

    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    return (
        <div>
            <button onClick={() => {

                auth.signIn('ITK', () => {
                    navigate(from, { replace: true })
                })

            }}>
                Sign In
            </button>
        </div>
    )
}

export default LoginPage;