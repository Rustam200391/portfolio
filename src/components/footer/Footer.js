import vk from './../../img/icons/vk.svg';
import gitHub from './../../img/icons/gitHub.svg';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="#!"><img src={vk} alt=" " /></a></li>
                        <li className="social__item"><a href="#!"><img src={gitHub} alt=" " /></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2023 frontend-i.learnhub.ru</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;