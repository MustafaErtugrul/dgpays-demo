import React, { useContext } from 'react'
import { favoritesContext } from './favoritesContext'

function FavoritesPage() {

    const { favorites, setfavorites } = useContext(favoritesContext)


    const emptyFavorites = () => {
        setfavorites([]);
    }

    const removeFavorites = (id) => {

        let favoritesArray = favorites.filter(q => q.id != id);
        setfavorites([...favoritesArray])

    }

    return (<>
        <ul>
            {
                favorites && favorites.map((item, key) => {
                    return <div style={{ display: 'flex' }}>
                        <li key={item.id}>{item.name}</li><button onClick={() => removeFavorites(item.id)}>Remove</button>
                    </div>

                })
            }
        </ul>
        <button onClick={() => emptyFavorites()}>Empty All Favorites</button>

    </>
    )
}

export default FavoritesPage