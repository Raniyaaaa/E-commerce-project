import Product from './components/Products/Product';
import About from './components/About/About';
import RootLayout from './components/Root';
import Home from './components/Home/Home';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';


  const router=createBrowserRouter([
    {path:'/',element:<RootLayout/>,
    children:[
      {path:'/',element:<Home/>},
      {path:'/store',element:<Product/>},
      {path:'/about',element:<About/>},
    ]
  }
  ])
const App=()=> {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
