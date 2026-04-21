import Header from "../components/header/Header";
import mainStyle from "../styles/main.module.css"


const Home = () => {
    return (
        <>
            <Header />

            <main className={mainStyle.section}>
                <div className={mainStyle.container}>
                    <ul className={mainStyle['content-list']}>
                        <li className={mainStyle['content-list__item']}>
                            <h2 className={mainStyle["title-2"]}>Frontend</h2>
                            <p>JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents</p>
                        </li>
                        <li className={mainStyle['content-list__item']}>
                            <h2 className={mainStyle["title-2"]}>Backend</h2>
                            <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
                        </li>
                    </ul>

                </div>
            </main>
        </>
    );
}

export default Home;