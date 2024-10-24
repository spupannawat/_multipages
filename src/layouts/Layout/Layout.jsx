// import components
import { Outlet } from 'react-router';
// -----------------------------------------
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

// import styles
import './Layout.css'

function Layout({ tab, setTab, products, cart,setToken }) {
    return ( 
        <div>
            <Header />
            <Navbar tab={tab} setTab={setTab} 
            products={products} cart={cart} setToken={setToken} />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;