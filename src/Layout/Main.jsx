import { Outlet, useLocation } from 'react-router-dom';
import Header from './../Shared/Header';
import Footer from './../Shared/Footer';

const Main = () => {
    const location=useLocation();
    const withoutFooter=location.pathname.includes("login") || location.pathname.includes("register");
    console.log(withoutFooter)

    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            {withoutFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;