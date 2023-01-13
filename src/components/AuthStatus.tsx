import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../App';

export const AuthStatus = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    if (!auth.user) {
        return <p>You´re not logged in</p>
    }

    return (
        <p>
            Welcome {auth.user}! <br />
            <button onClick={() => {
                auth.signOut(() => navigate('/'))
            }}>
                Sign out
            </button>
        </p>
    )

}

export default AuthStatus;