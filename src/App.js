import Product from './Pages/Product';
import About from './Pages/About';
import RootLayout from './components/Root';
import Home from './Pages/Home';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import ContactUs from './Pages/ContactUs';


  const router=createBrowserRouter([
    {path:'/',element:<RootLayout/>,
    children:[
      {path:'/',element:<Home/>},
      {path:'/store',element:<Product/>},
      {path:'/about',element:<About/>},
      {path:'/contactus',element:<ContactUs/>}
    ]
  }
  ])
const App=()=> {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
