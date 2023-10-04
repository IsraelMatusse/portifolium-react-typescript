import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './pages/Contact.tsx'


import Home from './pages/home.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';

const router= createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,
      errorElement:<NotFoundPage/>,
    },
    {
        path:"contact",
        element:<Contact/>,
      
    },
  ]
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
