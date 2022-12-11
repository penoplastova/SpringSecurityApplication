import style from './textSection.module.css'

const TextSection = () => {
    return(
        <div className={style.text_section}>
            <p>
                Всё самое лучше на Новый год! Скидки до <span className={style.sale}>50%</span> и кэшбек до <span className={style.cashback}>30%</span>!
            </p>
        </div>
    )
}

export default TextSection

