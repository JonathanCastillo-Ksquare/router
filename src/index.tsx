import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createHashRouter, RouterProvider, Route, Link } from 'react-router-dom';
import Home from './Home';
import ProjectHome from './ProjectHome';

const router = createHashRouter([
  {
    // path: '/esto-es-absoluto',
    path: '*',
    element: <App />,
    // children: [
    //   {
    //     path: '',
    //     element: <div>Esto es default value</div>
    //   },
    //   {
    //     path: 'home',
    //     element: <Home />
    //   },
    //   {
    //     path: 'contacto',
    //     element: <div>Hola contacto!</div>
    //   },
    //   {
    //     path: ':projectId',
    //     element: <ProjectHome />
    //   }
    // ]
  },
  {
    path: '/admin',
    element: <div>Esto es una ruta totalmente diferente</div>
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
