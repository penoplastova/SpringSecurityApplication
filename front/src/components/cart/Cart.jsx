import CartItem from './cartItem/CartItem'
import style from './cart.module.css'
import React from 'react'



const Cart = (props) => {
    return(
        <div className={style.overlay}>
            <div className={style.cart}>

                <div className={style.title_block}>
                    <h2>Корзина</h2>
                    <button className={style.close_btn} onClick={props.closeCart}>Х</button>
                </div>

                {
                    props.cartItems.length > 0
                        ? <div className={style.cart_list}>
                            {
                                props.cartItems.map(obj => {
                                    return(
                                        <CartItem
                                            key={obj.id}
                                            id={obj.id}
                                            title={obj.title}
                                            description={obj.description}
                                            price={obj.price}
                                            img={obj.img}
                                            onRemoveCartItem={props.onRemoveCartItem}
                                        />
                                    )
                                })
                            }
                        </div>
                        : <h2>В корзине ничего нет</h2>
                }



                <div className={style.total_price}>
                    <p className={style.total_price_text}>Итог:</p>
                    <p className={style.total_price_summ}> рублей</p>
                    <button>Заказать</button>
                </div>

            </div>
        </div>
    )
}

export default Cart;