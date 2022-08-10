import { useState } from 'react'
import AstroButtons from '../AstroButtons'
import styles from './Jumbotron.module.css'

const Jumbotron = ({ data, astros }) => {
    const [astro, setAstro] = useState("")

    return (
        <div className={`text-light text-center`}>

            <div className={`jumbotron jumbotron-fluid ${styles.jumbotron} backdropBlur contentBg`}>
                <div className="container">
                    <h1 className="display">{data.jumbotronTitle}</h1>
                    <p className="lead">{data.jumbotronText}</p>
                </div>
                
                <AstroButtons astros={astros} setAstro={setAstro} />

                <h1 className={`${styles.astroName__h1}`}>{astro}</h1>

            </div>
        </div>
    )
}

export default Jumbotron