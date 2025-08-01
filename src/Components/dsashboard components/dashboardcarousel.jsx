import image1 from "/src/assets/images/crouselfifth.webp";
import image2 from "/src/assets/images/crouselfourth.webp";
import image3 from "/src/assets/images/crouselfirst.webp";
import image4 from "/src/assets/images/crouselsecond.webp";
import image5 from "/src/assets/images/crouselthird.webp";
import { Link } from "react-router-dom";

import brandimg1 from "../../assets/images/brand1.jpg";
import brandimg2 from "../../assets/images/brand2.jpg";

import bankimg from "../../assets/images/bank.webp";

// second section

import image6 from "/src/assets/images/dashboardtitle.webp";
import img1 from "/src/assets/images/section1.webp";
import img2 from "/src/assets/images/section2.webp";
import img3 from "/src/assets/images/section1.3.webp";
import img4 from "/src/assets/images/section1.4.webp";
import img5 from "/src/assets/images/section1.5.webp";
import img6 from "/src/assets/images/section2.1.webp";
import img7 from "/src/assets/images/section2.2.webp";
import img8 from "/src/assets/images/section2.3.webp";
import img9 from "/src/assets/images/section2.4.webp";
import img10 from "/src/assets/images/section2.5.webp";
import img11 from "/src/assets/images/section1.6.webp";
import img12 from "/src/assets/images/section1.7.webp";
import img13 from "/src/assets/images/section1.8.webp";
import img14 from "/src/assets/images/section1.9.webp";
import img15 from "/src/assets/images/section1.10.webp";
import img16 from "/src/assets/images/section2.6.webp";
import img17 from "/src/assets/images/section2.7.webp";
import img18 from "/src/assets/images/section2.8.webp";
import img19 from "/src/assets/images/section2.9.webp";
import img20 from "/src/assets/images/section2.10.webp";
import Styles from "../../styles/dashboard.module.css";



const MyCarousel = () => {
    return (
        <>
            <div className="container">
                <div id="carouselExampleAutoplaying" className="carousel slide mt-5 mb-5" data-bs-ride="carousel">
                    <div className={`carousel-indicators ${Styles.indicator}`}>
                        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div className="carousel-inner">
                        <Link to={"#"}>
                            <div className="carousel-item active">
                                <img src={image1} className="d-block w-100" alt="img" />
                            </div>
                        </Link>
                        <Link to={"#"}>
                            <div className="carousel-item">
                                <img src={image2} className="d-block w-100" alt="img" />
                            </div>
                        </Link>
                        <Link to={"#"}>
                            <div className="carousel-item">
                                <img src={image3} className="d-block w-100" alt="img" />
                            </div>
                        </Link>
                        <Link to={"#"}>
                            <div className="carousel-item">
                                <img src={image4} className="d-block w-100" alt="img" />
                            </div>
                        </Link>
                        <Link to={"#"}>
                            <div className="carousel-item">
                                <img src={image5} className="d-block w-100" alt="img" />
                            </div>
                        </Link>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>


            <div className="container mb-1">
                <Link to={"#"}>
                <img src={brandimg1} alt="img" width={"50%"}/>
                </Link>
                <Link to={"#"}>
                <img src={brandimg2} alt="img" width={"50%"}/>
                </Link>
            </div>

            <div className="container">
                <Link to={"#"}>
                    <img src={bankimg} alt="img" width={"100%"} />
                </Link>
            </div>




            {/* second section */}



            <section className="mt-4">
                <div className="container">
                    <img src={image6} alt="img" width={"100%"} className="mb-3" />

                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className={`carousel-indicators ${Styles.indicator2}`}>
                            <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="3000">
                                <Link to={"#"}>
                                    <img src={img1} className={`${Styles.img_sec}`} alt="img" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={img2} className={`${Styles.img_sec}`} alt="img" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={img3} className={`${Styles.img_sec}`} alt="img" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={img4} className={`${Styles.img_sec}`} alt="img" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={img5} className={`${Styles.img_sec}`} alt="img" />
                                </Link>
                            </div>
                            <div className="carousel-item " data-bs-interval="3000">
                                <Link to={"#"}>
                                    <img src={img6} className={`${Styles.img_sec}`} alt="img" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={img7} className={`${Styles.img_sec}`} alt="img" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={img8} className={`${Styles.img_sec}`} alt="img" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={img9} className={`${Styles.img_sec}`} alt="img" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={img10} className={`${Styles.img_sec}`} alt="img" />
                                </Link>
                            </div>
                            <div className="carousel-item " data-bs-interval="3000">
                                <Link to={"#"}>
                                    <img src={img11} className={`${Styles.img_sec}`} alt="img" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={img12} className={`${Styles.img_sec}`} alt="img" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={img13} className={`${Styles.img_sec}`} alt="img" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={img14} className={`${Styles.img_sec}`} alt="img" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={img15} className={`${Styles.img_sec}`} alt="img" />
                                </Link>
                            </div>
                            <div className="carousel-item " data-bs-interval="3000">
                                <Link to={"#"}>
                                    <img src={img16} className={`${Styles.img_sec}`} alt="img" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={img17} className={`${Styles.img_sec}`} alt="img" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={img18} className={`${Styles.img_sec}`} alt="img" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={img19} className={`${Styles.img_sec}`} alt="img" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={img20} className={`${Styles.img_sec}`} alt="img" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MyCarousel;