import React from 'react';
import axios from 'axios';
import style from "./favorites.module.css";
import FavoritesCard from "./favoritesCard/FavoritesCard";

const Favorites = (props) => {

    const onAddToCart = (obj) => {
        axios.post('https://6385fb56beaa6458266f3bb8.mockapi.io/cart', obj)
        props.setCartItems([...props.cartItems, obj]);
    }

    const onRemoveFavorites = (id) => {
        axios.delete(`https://6385fb56beaa6458266f3bb8.mockapi.io/favorites/${id}`)
        props.setFavoriteItems((prev) => prev.filter(item => Number(item.id) !== Number(id)))
    }

    return(
        <div className={style.products_section}>
            <div className={style.search}>
                <h2>Избранные товары</h2>
            </div>

            <div className={style.products}>

                {
                    props.favoriteItems.map( obj => {
                        return(
                            <FavoritesCard
                                key={obj.id}
                                id={obj.id}
                                title={obj.title}
                                description={obj.description}
                                price={obj.price}
                                img={obj.img}
                                plusImg='/img/plus.png'
                                checkImg='/img/check.png'
                                onFav={
                                    (id) => {
                                        onRemoveFavorites(id)
                                    }
                                }
                                onPlus={
                                    (cartObj) => {
                                        onAddToCart(cartObj)
                                    }
                                }
                            />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Favorites

