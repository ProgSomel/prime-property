import {Outlet, useLocation} from "react-router-dom"
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";
import "aos/dist/aos.css";
import AOS from "aos"; 
import { useEffect } from "react";


  

const Root = () => {

  const location = useLocation();
  useEffect(()=> {
    if(location.pathname === "/") {
      document.title = "Home";
    }
    else {
      document.title = `${location.pathname.replace('/', '')}`;
    }

    if(location.state) {
      document.title = location.state;
    }


  }, [location.pathname])
    
    // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with your desired options
  }, []);



    return (
        <div >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};


Root.propTypes = {

};


export default Root;
