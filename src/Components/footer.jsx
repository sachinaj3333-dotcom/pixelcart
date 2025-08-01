import { Link } from "react-router-dom";
import playstore from "../assets/images/playstore.png";
import applestore from "../assets/images/applestore.png";
import fb from "../assets/images/facebook.png";
import tw from "../assets/images/twitter.png";
import yt from "../assets/images/youtube.png";
import ig from "../assets/images/insta.png";
import logo1 from '../assets/images/logo1.png';
import logo2 from "../assets/images/logo2.png";
import Styles from "../styles/footer.module.css";

const Footer = () => {
    return (
        <>
            <div className={`${Styles.mainfoot}`}>
                <footer className={`${Styles.footer}`}>
                    <div className="container  d-flex">
                        <div className={`row ${Styles.foot_content}`}>
                            <div className="col-md-6 col-sm-6 col-6 col-lg-3 mb-4">
                                <p className={`text-uppercase ${Styles.opthead}`} ><b>online shopping</b></p>
                                <Link to={"#"} className={`${Styles.opt}`}>Men</Link><br />
                                <Link to={"#"} className={`${Styles.opt}`}>Women</Link><br />
                                <Link to={"#"} className={`${Styles.opt}`}>Kids</Link><br />
                                <Link to={"#"} className={`${Styles.opt}`}>Home</Link><br />
                                <Link to={"#"} className={`${Styles.opt}`}>Beauty</Link><br />
                                <Link to={"#"} className={`${Styles.opt}`}>Genz</Link><br />
                                <Link to={"#"} className={`${Styles.opt}`}>Gift Cards</Link><br /><br />

                                <p className={`text-uppercase ${Styles.opthead}`} ><b>useful links</b></p>
                                <Link to={"#"} className={`${Styles.opt}`}>Blog</Link><br />
                                <Link to={"#"} className={`${Styles.opt}`}>Careers</Link><br />
                                <Link to={"#"} className={`${Styles.opt}`}>Site Map</Link><br />
                                <Link to={"#"} className={`${Styles.opt}`}>Corporate Information</Link><br />
                                <Link to={"#"} className={`${Styles.opt}`}>Whitehat</Link><br />
                                <Link to={"#"} className={`${Styles.opt}`}>Cleartrip</Link><br />

                            </div>
                            <div className="col-md-6 col-sm-6 col-6 col-lg-3 mb-2">
                                <p className={`text-uppercase ${Styles.opthead}`} ><b>customer policies</b></p>
                                <Link to={"#"} className={`${Styles.opt}`}>Contact Us</Link><br />
                                <Link to={"#"} className={`${Styles.opt}`}>FAQ</Link><br />
                                <Link to={"#"} className={`${Styles.opt}`}>T&C</Link><br />
                                <Link to={"#"} className={`${Styles.opt}`}>Terms Of Use</Link><br />
                                <Link to={"#"} className={`${Styles.opt}`}>Track Orders</Link><br />
                                <Link to={"#"} className={`${Styles.opt}`}>Shipping</Link><br />
                                <Link to={"#"} className={`${Styles.opt}`}>Cancellation</Link><br />
                                <Link to={"#"} className={`${Styles.opt}`}>Returns</Link><br />
                                <Link to={"#"} className={`${Styles.opt}`}>Privacy Policy</Link><br />
                                <Link to={"#"} className={`${Styles.opt}`}>Grievance Redressal</Link><br />
                            </div>
                            <div className="col-md-6 col-sm-6 col-lg-3 mb-2">
                                <p className={`text-uppercase ${Styles.opthead}`} ><b>experience pixel cart app on mobile</b></p>
                                <Link><img src={playstore} alt="link" width={"40%"} className="me-1" /></Link>
                                <Link><img src={applestore} alt="link" width={"38%"} /></Link><br /><br />

                                <p className={`text-uppercase ${Styles.opthead}`} ><b>keep in touch</b></p>
                                <Link><img src={fb} alt="link" width={"7%"} className="me-3" /></Link>
                                <Link><img src={tw} alt="link" width={"7%"} className="me-3" /></Link>
                                <Link><img src={yt} alt="link" width={"7%"} className="me-3   " /></Link>
                                <Link><img src={ig} alt="link" width={"7%"} /></Link>
                            </div>
                            <div className="col-md-6 col-sm-12 col-12 col-lg-3 mb-2">
                                <div className="row d-flex">
                                    <div className="col-2">
                                        <img src={logo1} alt="image" height={"50%"} />
                                    </div>
                                    <div className="col-10">
                                        <p><strong>100% ORIGINAL</strong>
                                            <span className={`${Styles.opt} ms-1`}>guarantee for all products at pixel cart</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="row d-flex">
                                    <div className="col-2">
                                        <img src={logo2} alt="image" height={"20%"} />
                                    </div>
                                    <div className="col-10">
                                        <p><strong>Return within 14 days</strong>
                                            <span className={`${Styles.opt} ms-1`}>of receiving your order</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className="container mt-3">
                        <div className="row">

                            <div className="col-12">
                                <p className="ms-5 " ><b>POPULAR SEARCHES</b><span className={`${Styles.head2}`}></span></p>
                                <p className={`${Styles.allbrandfoot}`}>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Makeup</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Dresses For Girls</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>T-Shirts</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Sandals</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Headphones</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Babydolls</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Blazers For Men</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Handbags</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Ladies Watches</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Bags</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Boxers</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Wallets</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Earrings</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Tops</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Reebok Shoes</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Puma Shoes</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Sport Shoes</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Fastrack Watches</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Kurtis</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Nike</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Smart Watches</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Titan Watches</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Designer Blouse</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Gowns</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Rings</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Cricket Shoes</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Forever 21</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Eye Makeup</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Photo Frames</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Punjabi Suits</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Bikni</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Myntra Fashion Show</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Lipstick</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Saree</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Watches</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Dresses</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Lehanga</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Goggles</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Bras</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Suit</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Chinos</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Nike Shoes</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Shoes</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Adidas Shoes</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Woodland Shoes</Link>
                                    <Link to={"#"} className={`${Styles.opt2}`}>Jewellery</Link>
                                    <Link to={"#"} className={`${Styles.opt}`}>Designers Sarees</Link>
                                </p><br /><br /><br />
                                

                                <div className="row">
                                    <div className="col-10">
                                        <span className={`${Styles.opt}`}>In case of any consern,<Link to={"#"} className={`${Styles.opt2_link}`}><b>Contact us</b></Link></span>
                                    </div>
                                    <div className="col-2 ">
                                        <span className={`${Styles.opt}`}>A Demo Website, by Sachin Singh Negi</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </footer>

            </div>
        </>
    )
}

export default Footer;