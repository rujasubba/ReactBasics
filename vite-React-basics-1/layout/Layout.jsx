import React from "react";
import Header from "../src/components/Header";

function Layout( {children}){
    return(
        
        <div>
            
            <Header />

            {children}
            
            
        </div>
    )
}
export default Layout;