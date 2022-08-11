import Link from 'next/link'
import Carousel from '../Carousel'
import styles from './AstroSection.module.css'

const AstroSection = ({ data }) => {
    return (
        <article id={data.id} className={`text-center text-light ${styles.section__wrapper}`}>
            <div className="contentBg backdropBlur">
                <Carousel id={data.id} />
                <h1>{data.name}</h1>
                <div className={styles.astroInfo__div}>
                    <p>{data.info}</p>
                </div>
                <p><i><Link href={data.wiki}><a target="_blank">{data.wiki}</a></Link></i></p>
            </div>
        </article>
    )
}
export default AstroSection