import Image from 'next/image'
import Link from 'next/link'
import styles from './HomeContent.module.css'

const HomeContent = ({ data }) => {
    return (
        <div className={styles.homeContent__wrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#3e009b" fillOpacity="1" d="M0,192L80,170.7C160,149,320,107,480,128C640,149,800,235,960,256C1120,277,1280,235,1360,213.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
                </path>
            </svg>
            <div className={`text-center text-light ${styles.homeContent__div}`}>
                <div className={styles.homeContent__text__div}>
                    <h1>{data.title}</h1>
                    <Image src="/imgs/solarSystem.png" layout="intrinsic" width={300} height={300} />
                    <p>{data.info}</p>
                </div>
                <p><i><Link href={data.wiki}><a target="_blank">{data.wiki}</a></Link></i></p>


            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="rgb(62, 0, 155)" fillOpacity="1" d="M0,192L80,170.7C160,149,320,107,480,128C640,149,800,235,960,256C1120,277,1280,235,1360,213.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
                </path>
            </svg>
        </div>
    )
}

export default HomeContent