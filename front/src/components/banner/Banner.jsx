import style from './banner.module.css'

const Banner = () => {
    return(
        <div className={style.banner_section}>
            <div className={style.banner}>
                <p className={style.text_banner}>Неделя низких цен!</p>
            </div>
        </div>
    )
}

export default Banner;