import React from 'react';
import style from './favoritesCard.module.css'

const FavoritesCard = (props) => {

    const [added, setAdded] = React.useState(false);
    // const [favorite, setFavorite] = React.useState(true);

    const onClickPlus = () => {
        let title = props.title
        let description = props.description
        let price = props.price
        let img = props.img
        let id = props.id

        props.onPlus({id, title,description, price,img});
        setAdded(!added);
    }

    const onClickFav = () => {
        props.onFav(props.id);
        // setFavorite(!favorite);
    }

    return(
        <div className={style.product_item}>

            {/*
                favorite === true ? <button className={style.favorite_btn_added} onClick={onClickFav}>Добавлено в избранное</button> : <button className={style.favorite_btn} onClick={onClickFav}>Добавить в избранное</button>
            */}
            <button className={style.favorite_btn_added} onClick={onClickFav}>Убрать из избранного</button>
            <img className={style.product_img} src={props.img} alt='iPhone XR'></img>
            <p className={style.product_title}>{props.title}</p>
            <p className={style.product_description}>{props.description}</p>
            <p className={style.price}>Цена</p>
            <div className={style.product_price}>
                <span>{props.price} рублей</span>
                <button className={added? style.btn_check : style.btn_plus} onClick={onClickPlus}>
                    <img src={added ? props.checkImg : props.plusImg} alt='Добавить в корзину'></img>
                </button>
            </div>
        </div>
    )
}

export default FavoritesCard;