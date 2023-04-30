import {createBrowserRouter} from 'react-router-dom'
import Layout from '../views/Layout'
import Home from '../views/Home'
import About from '../views/About'
import Porfolio from '../views/Portfolio'
import Resume from '../views/Resume'
import PortfolioDetails from '../components/PortfolioDetails'


const router = createBrowserRouter([
    {
        path: "",
        element: <Layout />,
        children: [
            {
                path : '/',
                element : <Home />
            },
            {
                path : '/about',
                element : <About />
            },
            {
                path : '/projects',
                element : <Porfolio />
            },
            {
                path : '/project-detail/:id',
                element : <PortfolioDetails />
            },
            {
                path : '/resume',
                element : <Resume />
            }
        ]
    } 
])

export default router;