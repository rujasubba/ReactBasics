import React from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import AppContextProvider from "../src/context";

function Layout( {children}){
    return(
        
        <AppContextProvider>
            
            <Header />

            {children}
            
            <Footer />
        </AppContextProvider>
    )
}
export default Layout;