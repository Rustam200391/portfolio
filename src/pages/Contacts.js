export const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <h3>Baku, Azerbaijan</h3>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <h3><a href="tel:+79997970484">+7 (999) 797-04-84</a></h3>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <h3><a href="https://mail.google.com/mail/u/0/#inbox">rg20031991@gmail.com</a></h3>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Linkedin</h2>
                        <h3><a href="https://www.linkedin.com/in/rustam-guseinov-476925258/">Rustam (Hrust _dev) Guseinov</a></h3>
                    </li>
                </ul>

            </div>
        </main>
    );
}

