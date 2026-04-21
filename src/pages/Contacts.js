import mainStyle from "../styles/main.module.css"

const Contacts = () => {
    return (
        <main className={mainStyle.section}>
            <div className={mainStyle.container}>
                <h1 className={mainStyle["title-1"]}>Contacts</h1>

                <ul className={mainStyle["content-list"]}>
                    <li className={mainStyle["content-list__item"]}>
                        <h2 className={mainStyle["title-2"]}>Location</h2>
                        <p>Moscow, Russia</p>
                    </li>
                    <li className={mainStyle["content-list__item"]}>
                        <h2 className={mainStyle["title-2"]}>Telegram / WhatsApp</h2>
                        <p><a href="tel:+79051234567">+7 (905) 123-45-67</a></p>
                    </li>
                    <li className={mainStyle["content-list__item"]}>
                        <h2 className={mainStyle["title-2"]}>Email</h2>
                        <p><a href="mailto:webdev@protonmail.com">webdev@protonmail.com</a></p>
                    </li>
                </ul>

            </div>
        </main>
    );
}

export default Contacts;
