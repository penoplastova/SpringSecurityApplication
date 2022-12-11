import React from 'react';
import style from './card.module.css'
import ContentLoader from "react-content-loader"

const Card = (props) => {

    const [added, setAdded] = React.useState(props.isAdded);
    const [favorite, setFavorite] = React.useState(props.isFav);

    const onClickPlus = () => {
        let id = props.id
        let myId = props.myId
        let title = props.title
        let description = props.description
        let price = props.price
        let img = props.img

        props.onPlus({id, myId, title, description, price, img});
        setAdded(!added);
    }

    const onClickFav = () => {
        let id = props.id
        let myId = props.myId
        let title = props.title
        let description = props.description
        let price = props.price
        let img = props.img

        props.onFav({id, myId, title, description, price, img});
        setFavorite(!favorite);
    }

    return(
        <div className={style.product_item}>
            {
                props.isLosding ?
                    <ContentLoader
                        speed={2}
                        width={290}
                        height={430}
                        viewBox="0 0 230 400"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                        {...props}
                    >
                        <rect x="0" y="0" rx="4" ry="4" width="125" height="16" />
                        <rect x="0" y="25" rx="4" ry="4" width="240" height="230" />
                        <rect x="5" y="318" rx="4" ry="4" width="113" height="36" />
                        <rect x="170" y="318" rx="4" ry="4" width="65" height="36" />
                        <rect x="0" y="274" rx="4" ry="4" width="150" height="9" />
                        <rect x="0" y="290" rx="4" ry="4" width="200" height="9" />
                    </ContentLoader>
                    :<>
                        {
                            favorite === true ? <button className={style.favorite_btn_added} onClick={onClickFav}>&#9829;&#9829;&#9829;</button> : <button className={style.favorite_btn} onClick={onClickFav}>
                                &#9825;&#9825;&#9825;</button>
                        }
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
                    </>
            }
        </div>
    )
}

export default Card;