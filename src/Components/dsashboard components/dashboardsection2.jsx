import secimage from "/src/assets/images/dashboardtitle2.webp";
import secimage1 from "/src/assets/images/sec3.1.webp";
import secimage2 from "/src/assets/images/sec3.2.webp";
import secimage3 from "/src/assets/images/sec3.3.webp";
import secimage4 from "/src/assets/images/sec3.4.webp";
import secimage5 from "/src/assets/images/sec3.5.webp";
import secimage6 from "/src/assets/images/sec3.6.webp";
import secimage7 from "/src/assets/images/sec3.7.webp";
import secimage8 from "/src/assets/images/sec3.8.webp";
import secimage9 from "/src/assets/images/sec3.9.webp";
import secimage10 from "/src/assets/images/sec3.10.webp";
import secimage11 from "/src/assets/images/sec4.1.webp";
import secimage12 from "/src/assets/images/sec4.2.webp";
import secimage13 from "/src/assets/images/sec4.3.webp";
import secimage14 from "/src/assets/images/sec4.4.webp";
import secimage15 from "/src/assets/images/sec4.5.webp";
import secimage16 from "/src/assets/images/sec4.6.webp";
import secimage17 from "/src/assets/images/sec4.7.webp";
import secimage18 from "/src/assets/images/sec4.8.webp";
import secimage19 from "/src/assets/images/sec4.9.webp";
import secimage20 from "/src/assets/images/sec4.10.webp";
import { Link } from "react-router-dom";


const MySection = () => {
    return (
        <>
            <section className="mt-4">
                <div className="container">
                    <img src={secimage} alt="img" width={"100%"} />

                    <div id="carouselExampleInterval1" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner interval-wrapper mt-2">
                            <div class="carousel-indicators interval3">
                                <button type="button" data-bs-target="#carouselExampleInterval1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleInterval1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleInterval1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleInterval1" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            </div>
                            <div class="carousel-item active" data-bs-interval="3000">
                                <Link to={"#"}>
                                <img src={secimage1} class="img_section" alt="img" />
                                </Link>
                                <Link to={"#"}>
                                <img src={secimage2} class="img_section" alt="img" />
                                </Link>
                                <Link to={"#"}>
                                <img src={secimage3} class="img_section" alt="img" />
                                </Link>
                                <Link to={"#"}>
                                <img src={secimage4} class="img_section" alt="img" />
                                </Link>
                                <Link to={"#"}>
                                <img src={secimage5} class="img_section" alt="img" />
                                </Link>
                            </div>
                            <div class="carousel-item" data-bs-interval="3000">
                                <Link to={"#"}>
                                <img src={secimage6} class="img_section" alt="img" />
                                </Link>
                                <Link to={"#"}>
                                <img src={secimage7} class="img_section" alt="img" />
                                </Link>
                                <Link to={"#"}>
                                <img src={secimage8} class="img_section" alt="img" />
                                </Link>
                                <Link to={"#"}>
                                <img src={secimage9} class="img_section" alt="img" />
                                </Link>
                                <Link to={"#"}>
                                <img src={secimage10} class="img_section" alt="img" />
                                </Link>
                            </div>
                            <div class="carousel-item" data-bs-interval="3000">
                                <Link to={"#"}>
                                <img src={secimage11} class="img_section" alt="img" />
                                </Link>
                                <Link to={"#"}>
                                <img src={secimage12} class="img_section" alt="img" />
                                </Link>
                                <Link to={"#"}>
                                <img src={secimage13} class="img_section" alt="img" />
                                </Link>
                                <Link to={"#"}> 
                                <img src={secimage14} class="img_section" alt="img" />
                                </Link>
                                <Link to={"#"}>
                                <img src={secimage15} class="img_section" alt="img" />
                                </Link>
                            </div>
                            <div class="carousel-item" data-bs-interval="3000">
                                <Link to={"#"}>
                                <img src={secimage16} class="img_section" alt="img" />
                                </Link>
                                <Link to={"#"}>
                                <img src={secimage17} class="img_section" alt="img" />
                                </Link>
                                <Link to={"#"}>
                                <img src={secimage18} class="img_section" alt="img" />
                                </Link>
                                <Link to={"#"}>
                                <img src={secimage19} class="img_section" alt="img" />
                                </Link>
                                <Link to={"#"}>
                                <img src={secimage20} class="img_section" alt="img" />
                                </Link>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval1" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval1" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MySection;