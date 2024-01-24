import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Orders from './Pages/Orders';
import SignIn from './Pages/SignIn';
import Cart from './Pages/Cart';
import SignUp from './Pages/SignUp';
import CustomAuthContext from './AuthenticationContext';
import Profile from './Pages/Profile';
import CustomProductContext from './ProductContext';
function App() {


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
