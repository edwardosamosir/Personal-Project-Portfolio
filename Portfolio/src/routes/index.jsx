import {createBrowserRouter} from 'react-router-dom'
import Layout from '../views/Layout'
import Home from '../views/Home'
import About from '../views/About'
import Porfolio from '../views/Portfolio'
import Resume from '../views/Resume'
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
                element : <div>Ini halaman Project Detail</div>
            },
            {
                path : '/resume',
                element : <Resume />
            }
        ]
    } 
])

export default router;