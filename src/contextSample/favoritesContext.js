import { createContext, useContext, useEffect, useState } from "react";

export const favoritesContext = createContext(null);


export const FavoriteProvider = ({ children }) => {


    
    
    //Global state
    const [favorites, setfavorites] = useState([]);

    const values = {
        favorites,
        setfavorites
    }

    return <favoritesContext.Provider value={values}>{children}</favoritesContext.Provider>

}


