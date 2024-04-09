import {Outlet} from "react-router-dom"
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";
import "aos/dist/aos.css";
import AOS from "aos"; 
import { useEffect } from "react";


  

const Root = () => {
    
    // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with your desired options
  }, []);



    return (
        <div data-aos="fade-up">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};


Root.propTypes = {

};


export default Root;
