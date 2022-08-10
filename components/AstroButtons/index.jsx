import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './AstroButtons.module.css'

const AstroButtons = ({ astros, setAstro }) => {
    const router = useRouter()

    let createButtons = () => {
        return astros.map((astro, idx) => {
            return <Link key={idx} href={router.pathname === "/br" ?
                `/br/${astro.name}` : `/${astro.name}`
            }>

                <div onMouseEnter={() =>
                        setAstro(astro.name)}
                    onMouseLeave={() =>
                        setAstro()}
                    className={`${styles.astroButton} ${astro.id}`}>
                </div>
            </Link>
        })
    }

    return (
        <div className={`${styles.astroButtons__wrapper}`}>
            {createButtons()}
        </div>
    )
}

export default AstroButtons