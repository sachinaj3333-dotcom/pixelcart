import image1 from "/src/assets/images/crouselfifth.webp";
import image2 from "/src/assets/images/crouselfourth.webp";
import image3 from "/src/assets/images/crouselfirst.webp";
import image4 from "/src/assets/images/crouselsecond.webp";
import image5 from "/src/assets/images/crouselthird.webp";
import { Link } from "react-router-dom";

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



const MyCarousel = () => {
    return (
        <>
            <div id="carouselExampleAutoplaying" class="carousel slide mt-5 mb-5" data-bs-ride="carousel">
                <div class="carousel-indicators indicator">
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div class="carousel-inner">
                    <Link to={"#"}>
                        <div class="carousel-item active">
                            <img src={image1} class="d-block w-100" alt="img" />
                        </div>
                    </Link>
                    <Link to={"#"}>
                        <div class="carousel-item">
                            <img src={image2} class="d-block w-100" alt="img" />
                        </div>
                    </Link>
                    <Link to={"#"}>
                        <div class="carousel-item">
                            <img src={image3} class="d-block w-100" alt="img" />
                        </div>
                    </Link>
                    <Link to={"#"}>
                        <div class="carousel-item">
                            <img src={image4} class="d-block w-100" alt="img" />
                        </div>
                    </Link>
                    <Link to={"#"}>
                        <div class="carousel-item">
                            <img src={image5} class="d-block w-100" alt="img" />
                        </div>
                    </Link>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>



            {/* second section */}



            <section className="mt-4">
                <div className="container">
                    <img src={image6} alt="img" width={"100%"} className="mb-3" />

                    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators indicator2">
                            <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="3000">
                                <Link to={"#"}>
                                    <img src={img1} class="img_sec" alt="img" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={img2} class="img_sec" alt="img" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={img3} class="img_sec" alt="img" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={img4} class="img_sec" alt="img" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={img5} class="img_sec" alt="img" />
                                </Link>
                            </div>
                            <div class="carousel-item " data-bs-interval="3000">
                                <Link to={"#"}>
                                    <img src={img6} class="img_sec" alt="img" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={img7} class="img_sec" alt="img" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={img8} class="img_sec" alt="img" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={img9} class="img_sec" alt="img" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={img10} class="img_sec" alt="img" />
                                </Link>
                            </div>
                            <div class="carousel-item " data-bs-interval="3000">
                                <Link to={"#"}>
                                    <img src={img11} class="img_sec" alt="img" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={img12} class="img_sec" alt="img" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={img13} class="img_sec" alt="img" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={img14} class="img_sec" alt="img" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={img15} class="img_sec" alt="img" />
                                </Link>
                            </div>
                            <div class="carousel-item " data-bs-interval="3000">
                                <Link to={"#"}>
                                    <img src={img16} class="img_sec" alt="img" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={img17} class="img_sec" alt="img" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={img18} class="img_sec" alt="img" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={img19} class="img_sec" alt="img" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={img20} class="img_sec" alt="img" />
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