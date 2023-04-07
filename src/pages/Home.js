import {Header} from '../components/header/Header'

export const Home = () => {
    return (
        <>
            <Header />

            <main className="section">
                <div className="container">

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>HTML, CSS, NPM, BootStrap, Sass,JavaScript, TypeScript, ReactJS, Angular </p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Backend</h2>
                            <p>NodeJS, PHP, Laravel</p>
                        </li>
                    </ul>

                </div>
            </main>
        </>
    );
}

