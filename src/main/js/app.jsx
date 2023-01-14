'use strict'

const React = require('react');
import {Canvas} from './components/canvas'
import {Filee} from './components/file/File'
import ErrorPage from './components/error/ErrorPage'
import { Outlet, Link } from "react-router-dom";
import { createRoot }  from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        u: "uuuuu"}
    }

    clickHandler = () => {
    const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('api/login?username=ssssss',requestOptions)
        .then(res => res.json())
        .then((res) => {
            this.setState({
            u: res.user
            });
        })
    }

/*
Create the tiny clickable component
*/
    render(){
        return (
        <Canvas/>)
    }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
  {
      path: "/success",
      element: <Filee/>,
      errorElement: <ErrorPage />,
    },
    {
          path: "/file",
          element: <Filee/>,
          errorElement: <ErrorPage />,
        }
]);

createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
