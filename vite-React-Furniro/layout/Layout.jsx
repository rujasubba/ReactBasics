import React from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import AppContextProvider from "../src/context";


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Layout( {children}){
    return(
        
        <AppContextProvider>
            
            <Header />

            {children}
            
            <Footer />
            <ToastContainer />
        </AppContextProvider>
    )
}
export default Layout;