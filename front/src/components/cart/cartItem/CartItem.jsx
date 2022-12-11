import style from './cartItem.module.css'
import React from 'react';

const CartItem = (props) => {
    return(
        <div className={style.cart_item}>
            <img className={style.cart_img} src={props.img} alt=''></img>
            <h3 className={style.cart_title}>
                {props.title}
                <br />
                <span className={style.cart_price}>{props.price}</span>
            </h3>
            <button onClick={() => props.onRemoveCartItem(props.id)} className={style.close_btn}>Х</button>
        </div>
    )
}

export default CartItem;