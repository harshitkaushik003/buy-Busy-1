//import from router dom

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
//import components and pages

import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Orders from './Pages/Orders';
import SignIn from './Pages/SignIn';
import Cart from './Pages/Cart';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';

//authentication context
import CustomAuthContext from './AuthenticationContext';
//product context
import CustomProductContext from './ProductContext';

function App() {

  //routers
  const router = createBrowserRouter([
    {path: '/', element: <Navbar/>, children:[
      {
        index: true, 
        element: <Home/>
      },
      {
        path: 'orders',
        element: <Orders/>
      },
      {
        path:'sign-up',
        element:<SignUp/>
      },
      {
        path: 'sign-in',
        element:<SignIn/>
      },
      {
        path:'cart',
        element:<Cart/>
      },
      {
        path: ':id/profile',
        element:<Profile/>
      }
    ]}
  ])
  return (
    <>
    <CustomAuthContext>
      <CustomProductContext>
        <RouterProvider router={router}/>
      </CustomProductContext>
    </CustomAuthContext>
    </> 
  );
}

export default App;
