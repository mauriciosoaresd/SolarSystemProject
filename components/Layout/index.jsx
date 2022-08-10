import Navbar from './Navbar'
import Footer from './Footer'
import styles from "./Layout.module.css"

const Layout = (props) => {

    return (
        <div className={`${styles.layout__wrapper} ${styles.background__wrapper}`}>
            <Navbar />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout