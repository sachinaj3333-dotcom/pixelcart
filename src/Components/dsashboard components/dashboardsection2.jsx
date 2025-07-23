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


const MySection = () => {
    return (
        <>
            <section className="mt-4">
                <div className="container">
                    <img src={secimage} alt="img" width={"100%"} />

                    <div id="carouselExampleInterval1" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="3000">
                                <img src={secimage1} class="img_section" alt="img"/>
                                <img src={secimage2} class="img_section" alt="img"/>
                                <img src={secimage3} class="img_section" alt="img"/>
                                <img src={secimage4} class="img_section" alt="img"/>
                                <img src={secimage5} class="img_section" alt="img"/>
                            </div>
                            <div class="carousel-item" data-bs-interval="3000">
                                <img src={secimage6} class="img_section" alt="img"/>
                                <img src={secimage7} class="img_section" alt="img"/>
                                <img src={secimage8} class="img_section" alt="img"/>
                                <img src={secimage9} class="img_section" alt="img"/>
                                <img src={secimage10} class="img_section" alt="img"/>
                            </div>
                            <div class="carousel-item" data-bs-interval="3000">
                                <img src="..." class="img_section" alt="img"/>
                                <img src="..." class="img_section" alt="img"/>
                                <img src="..." class="img_section" alt="img"/>
                                <img src="..." class="img_section" alt="img"/>
                                <img src="..." class="img_section" alt="img"/>
                            </div>
                            <div class="carousel-item" data-bs-interval="3000">
                                <img src="..." class="img_section" alt="img"/>
                                <img src="..." class="img_section" alt="img"/>
                                <img src="..." class="img_section" alt="img"/>
                                <img src="..." class="img_section" alt="img"/>
                                <img src="..." class="img_section" alt="img"/>
                            </div>
                            <div class="carousel-item" data-bs-interval="3000">
                                <img src="..." class="img_section" alt="img"/>
                                <img src="..." class="img_section" alt="img"/>
                                <img src="..." class="img_section" alt="img"/>
                                <img src="..." class="img_section" alt="img"/>
                                <img src="..." class="img_section" alt="img"/>
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