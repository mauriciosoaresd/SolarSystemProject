import Link from 'next/link';
import styles from './Footer.module.css'
const Footer = () => {
    return (
        <footer>
            <div className={`${styles.footerButtons__divWrapper}`}>
                <Link target="_blank" rel="noopener noreferrer" href="https://github.com/mauriciosoaresd">
                    <i className="fab fa-github"></i>
                </Link>

                <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mauriciosdomingues/">
                    <i className="fab fa-linkedin-in"></i>
                </Link>
            </div>
        </footer>
    )
}
export default Footer;
