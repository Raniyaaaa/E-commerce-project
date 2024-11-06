import Product from './Pages/Product';
import About from './Pages/About';
import Cart from './components/Cart/Cart';
import Auth from './Pages/Auth';
import RootLayout from './components/Root';
import Home from './Pages/Home';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import ContactUs from './Pages/ContactUs';
import ProductDetails from './Pages/ProductDetails';


  const router=createBrowserRouter([
    {path:'/',element:<RootLayout/>,
    children:[
      {path:'/',element:<Home/>},
      {path:'/store',element:<Product/>},
      {path:'/about',element:<About/>},
      {path:'/contactus',element:<ContactUs/>},
      {path:'/store/:title',element:<ProductDetails/>},
      {path:'/auth',element:<Auth></Auth>}
    ]
  }
  ])
const App=()=> {
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    <Cart/>
    </>
  )
}

export default App;
