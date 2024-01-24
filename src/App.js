import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Orders from './Pages/Orders';
import SignIn from './Pages/SignIn';
import Cart from './Pages/Cart';
import SignUp from './Pages/SignUp';
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
        path:'/cart',
        element:<Cart/>
      }
    ]}
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </> 
  );
}

export default App;
