import React, { useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import LoginPage from './components/LoginPage';
import PublicPage from './components/PublicPage';
import { fakeFirebase } from './auth'
import AuthenticatedRoute from './components/AuthenticatedRoute';
import PrivatePage from './components/PrivatePage';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>

          <Route path='/' element={<PublicPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/protected' element={
            <AuthenticatedRoute>
              <PrivatePage />
            </AuthenticatedRoute>
          } />

        </Route>
      </Routes>
    </AuthProvider>


  );
}

export default App;

// Para hacer que si el usuario esta logeado pueda acceder a esas rutas

interface IAuthcontext {
  user: any;
  signIn: (user: string, cb: VoidFunction) => void;
  signOut: (cb: VoidFunction) => void;
}

let AuthContext = React.createContext<IAuthcontext>(null!) //Null para que no se preocupe con el tipado, porque antes de utilizarlo le seteare un valor adecuado

type AuthProviderProps = {
  children: React.ReactNode
}

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<any>(null);

  const signIn = (user: string, cb: VoidFunction) => {
    return fakeFirebase.signIn(() => {
      setUser(user);
      cb();
    })//Hacemos la peiticon de login
  }

  const signOut = (cb: VoidFunction) => {
    return fakeFirebase.signOut(() => {
      setUser(null);
      cb();
    })
  }

  let value = { user, signIn, signOut }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}