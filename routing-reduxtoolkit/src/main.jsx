import React from 'react';import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Products } from './components/Products.jsx';
import { ConatctUs } from './pages/ConatctUs.jsx';
import { Login } from './pages/Login.jsx';
import { Register } from './pages/Register.jsx';
import { Pagenotfound } from './pages/Pagenotfound.jsx';
import { Provider } from 'react-redux';
import mystore from './redux/mystore.js';

const myroutes = createBrowserRouter([
  {path:'/' ,element:<App/>, 
   children:[ 
    {path:'' , element:<Home/>},
    {path:'about' ,element:<About/>},
    {path:'products',element:<Products/>},
    {path:'contact',element:<ConatctUs/>},
    {path:'login',element:<Login/>}
  ] } ,
  {path:'/signup',element:<Register/>},

  {path:"*",element:<Pagenotfound/>}
]) 

ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={mystore}>
    <RouterProvider router={myroutes}/>
 </Provider>
 ,
)
