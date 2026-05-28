import { Outlet } from 'react-router-dom';
import Header from '../componentes/Header.jsx';
import Footer from '../componentes/Footer.jsx';

function Layout(){
    return(
        <>
            <Header />
            <main className="min-h-screen">
                <Outlet />
            </main>
            <Footer />
        </>
);
}
export default Layout;