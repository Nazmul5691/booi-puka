import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Root(){
    return(
        <div className="max-w-6xl mx-auto">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}