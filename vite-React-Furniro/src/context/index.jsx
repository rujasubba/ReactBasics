
import { createContext, useState } from "react";

export const AppContext = createContext("");

const AppContextProvider = (props) => {
  const [cartData, setCartData] = useState([]);
  

  const state = {
    cartData,
  };

  const setDataToCart = (value) => {
    
    setCartData((prevState) => [...prevState, value]);
    console.log(cartData);
    };
   

  return (
    <AppContext.Provider 
      value={{
        ...state,
        setDataToCart: setDataToCart,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;


