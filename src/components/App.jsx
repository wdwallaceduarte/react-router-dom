
import AppRouter from '../routes';
import './App.css'
import { Link } from 'react-router-dom';


const App = () => {

//  let page;
//  const pathname = window.location.pathname
//  switch (pathname) {
//   case '/':
//     page = <Home/>
//     break
//   case '/products':
//     page = <Products/>
//     break
//   case '/about':
//     page = <About/>
//     break
//     default:
//       page = <NotFound/>





  return (
    <>
    <header>
      <Link to="/">Logo</Link>
      <nav>
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
    <AppRouter />
    </>
  );
}

export default App;
