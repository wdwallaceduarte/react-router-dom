

import { Routes, Route } from 'react-router-dom'
import './components/App.css'
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </>

    )
}

export default AppRouter
