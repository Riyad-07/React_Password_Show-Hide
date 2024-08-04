import React from 'react'
import Increment from './component/Increment'
import Password from './component/Password'


import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import RootLayOut from './RootLayOut';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"element={<RootLayOut />}>
      <Route index="/" element={<Home/>}/>
      <Route path="/value1" element={<Increment/>}/>
      <Route path="/value2" element={<Password/>}/>
    </Route>
  )
);





const App = () => {
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App