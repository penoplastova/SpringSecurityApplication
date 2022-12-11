import style from './footer.module.css'

const Footer = () => {
    return(
        <footer>
            <div className={style.logo}>Магазинчик</div>
            <p>
                <a target="_blank" href="https://telegram.org/" title="Телеграм"><img src="/img/telegram.png" alt="Telegram"/></a>
                <a target="_blank" href="https://telegram.org/" title="Телеграм"><img src="/img/telegram.png" alt="Telegram"/></a>
                <a target="_blank" href="https://telegram.org/" title="Телеграм"><img src="/img/telegram.png" alt="Telegram"/></a>
            </p>
        </footer>
    )
}

export default Footer;