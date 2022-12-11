import Card from "../card/Card";
import style from './products.module.css'
import axios from "axios";
import React from "react";

const Products = (props) => {

    const onAddToCart = async (obj) => {
        try{
            const findCartItem = props.cartItems.find((cartItem) => cartItem.myId === obj.myId)
            if(findCartItem) {
                axios.delete(`https://6385fb56beaa6458266f3bb8.mockapi.io/cart/${findCartItem.id}`)
                props.setCartItems(prev => prev.filter(cartItem => cartItem.myId !== obj.myId))
            } else{
                const {data} = await axios.post('https://6385fb56beaa6458266f3bb8.mockapi.io/cart', obj)
                props.setCartItems([...props.cartItems, data]);
            }
        }
        catch{
            alert('Не удалось добавить товар в корзину')
        }
    }

    const onAddToFavorite = async (objFavorite) => {
        try{
            const findFavoriteItem = props.favoriteItems.find(favItem => favItem.myId === objFavorite.myId)
            if (findFavoriteItem) {
                axios.delete(`https://6385fb56beaa6458266f3bb8.mockapi.io/favorites/${findFavoriteItem.id}`)
            } else {
                const {data} = await axios.post('https://6385fb56beaa6458266f3bb8.mockapi.io/favorites', objFavorite)
                props.setFavoriteItems([...props.favoriteItems, data]);
            }
        }
        catch{
            alert('Не удалось добавить товар в избранное')
        }
    }

    const onSearchInput = (inputValue) => {
        props.setSearch(inputValue.target.value);
    }

    const renderCard = () => {
        const filterItems = props.items.filter((item) =>
            item.title.toLowerCase().includes(props.search.toLowerCase())
        )
        return (props.loading ? [...Array(6)] : filterItems).map( (obj, index) => {
            return(
                <Card
                    key={index}
                    {...obj}
                    isLoading={props.loading}
                    isAdded={
                        props.cartItems.some((objIsAdded) => objIsAdded.myId === obj.myId)
                    }
                    isFav={
                        props.favoriteItems.some((objIsFav) => objIsFav.myId === obj.myId)
                    }
                    plusImg='/img/plus.png'
                    checkImg='/img/check.png'
                    onFav={
                        (favObj) => {
                            onAddToFavorite(favObj)
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

    return(
        <div className={style.products_section}>
            <div className={style.search}>
                <h2>{props.search ? 'Поиск по запросу: ' + props.search : 'Все смартфоны'}</h2>
                <div className={style.search_block}>
                    <img src="/img/search.png" alt="search"></img>
                    <input onChange={onSearchInput} placeholder="Поиск по товарам" />
                </div>
            </div>

            <div className={style.products}>

                {
                    renderCard()
                }

            </div>
        </div>
    )
}

export default Products;