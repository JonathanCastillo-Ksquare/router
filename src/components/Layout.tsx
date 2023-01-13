// Tambien llamado shell component
// Las cosas que no quiero que cambien a pesar que cambie la ruta (estilos)
import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import AuthStatus from './AuthStatus';
export const Layout = () => {
    return (
        <div className="App">
            <header className="App-header">
                <p>Esto nunca va a cambiar</p>
                <AuthStatus />
                <main>
                    <Outlet />

                </main>
            </header>
        </div>
    )
}

export default Layout;