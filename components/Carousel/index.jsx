import styles from './Carousel.module.css'

const Carousel = ({id}) => {
    return (
        <div id={`carouselExampleControls${id}`} className={`${styles.carousel} carousel slide`} data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={`/imgs/caroussel/${id}/${id}1.jpg`} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={`/imgs/caroussel/${id}/${id}2.jpg`} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={`/imgs/caroussel/${id}/${id}3.jpg`} className="d-block w-100" alt="..." />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-target={`#carouselExampleControls${id}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>

            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-target={`#carouselExampleControls${id}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carousel