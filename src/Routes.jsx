import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import AboutUs from './pages/AboutUs';
import { Gallery } from './pages/Gallery';
import { 
  Automobile,
  GreaseBucket,
  Engineoil,
  Gearoil,
  Lubicatinggrease,
  ProductLayout ,
} from './pages/products/Product';


const routes = [
  {
    path: '/',
    element: <Home />,
    exact: true,
    
  },
  {
    path: '/products',
    children: [
      {
        index: true,
        element: <ProductLayout /> ,
        
      },
      {
        path: 'automotive-grease',
        element: <Automobile />
      },
      {
        path: 'engine-oil',
        element: <Engineoil />
      },
      {
        path: 'gear-oil',
        element: <Gearoil />
      },
      {
        path: 'grease-bucket',
        element: <GreaseBucket />
      },
      {
        path: 'lubricating-grease',
        element: <Lubicatinggrease />
      }
    ]
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/about-us',
    element: <AboutUs />,
  },
  {
    path: '/gallery',
    element: <Gallery />,
  },
  {
    path: '*',
    element: <NotFound />, // Changed from <Home /> to <NotFound />
  }
];

export default routes;