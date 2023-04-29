import {createBrowserRouter} from 'react-router-dom'
import Layout from '../views/Layout'
import Home from '../views/Home'
import Porfolio from '../views/Portfolio'

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
                element : <div>Ini halaman About</div>
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
                element : <div>Ini halaman Resume</div>
            }
        ]
    } 
])

export default router;