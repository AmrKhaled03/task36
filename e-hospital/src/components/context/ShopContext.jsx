import React,{createContext} from 'react'

export const ShoppingContext = createContext();
export const ContextProvider = ({ children }) => {
  const openAside=()=>{



    const aside = document.getElementById('aside');


    aside.classList.toggle('active');
    


  }


    const contextValue = {
  openAside
   
     
      };
    return(
        <ShoppingContext.Provider value={contextValue} >
     {children}       
        </ShoppingContext.Provider>

    );
}   


 