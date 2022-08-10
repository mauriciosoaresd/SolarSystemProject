import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './Navbar.module.css'

const Navbar = () => {
    const router = useRouter()

    return (
        <nav className={`${styles.navbar} backdropBlur navbar navbar-expand-lg text-light fixed-top`}>
            <Link href={router.pathname.includes('/br/') ? "/br" : "/"}>
                <a className={`navbar-brand ${styles.logoLink__a}`}>
                    <img src="/imgs/logo.png" alt="" />
                    Solar System
                </a>
            </Link>

            <div className={styles.languagesDiv__wrapper}>
                <Link href={"/"}>
                    <a>
                        🇺🇸
                    </a>
                </Link>
                <Link href={"/br"}>
                    <a>
                        🇧🇷
                    </a>
                </Link>

            </div>
        </nav>
    )
}

export default Navbar