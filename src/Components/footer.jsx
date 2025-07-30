import { Link } from "react-router-dom";
import playstore from "../assets/images/playstore.png";
import applestore from "../assets/images/applestore.png";
import fb from "../assets/images/facebook.png";
import tw from "../assets/images/twitter.png";
import yt from "../assets/images/youtube.png";
import ig from "../assets/images/insta.png";
import logo1 from '../assets/images/logo1.png';
import logo2 from "../assets/images/logo2.png"

const Footer = () => {
    return (
        <>
            <div className="mainfoot">
                <footer>
                    <div className="container  d-flex">
                        <div className="ms-5">
                            <p className="text-uppercase opthead" ><b>online shopping</b></p>
                            <Link to={"#"} className="opt">Men</Link><br />
                            <Link to={"#"} className="opt">Women</Link><br />
                            <Link to={"#"} className="opt">Kids</Link><br />
                            <Link to={"#"} className="opt">Home</Link><br />
                            <Link to={"#"} className="opt">Beauty</Link><br />
                            <Link to={"#"} className="opt">Genz</Link><br />
                            <Link to={"#"} className="opt">Gift Cards</Link><br /><br />

                            <p className="text-uppercase opthead" ><b>useful links</b></p>
                            <Link to={"#"} className="opt">Blog</Link><br />
                            <Link to={"#"} className="opt">Careers</Link><br />
                            <Link to={"#"} className="opt">Site Map</Link><br />
                            <Link to={"#"} className="opt">Corporate Information</Link><br />
                            <Link to={"#"} className="opt">Whitehat</Link><br />
                            <Link to={"#"} className="opt">Cleartrip</Link><br />

                        </div>
                        <div className="ms-5">
                            <p className="text-uppercase opthead" ><b>customer policies</b></p>
                            <Link to={"#"} className="opt">Contact Us</Link><br />
                            <Link to={"#"} className="opt">FAQ</Link><br />
                            <Link to={"#"} className="opt">T&C</Link><br />
                            <Link to={"#"} className="opt">Terms Of Use</Link><br />
                            <Link to={"#"} className="opt">Track Orders</Link><br />
                            <Link to={"#"} className="opt">Shipping</Link><br />
                            <Link to={"#"} className="opt">Cancellation</Link><br />
                            <Link to={"#"} className="opt">Returns</Link><br />
                            <Link to={"#"} className="opt">Privacy Policy</Link><br />
                            <Link to={"#"} className="opt">Grievance Redressal</Link><br />
                        </div>
                        <div className="ms-5  w-25">
                            <p className="text-uppercase opthead" ><b>experience pixel cart app on mobile</b></p>
                            <Link><img src={playstore} alt="link" width={"40%"} className="me-1" /></Link>
                            <Link><img src={applestore} alt="link" width={"38%"} /></Link><br /><br />

                            <p className="text-uppercase opthead" ><b>keep in touch</b></p>
                            <Link><img src={fb} alt="link" width={"7%"} className="me-3" /></Link>
                            <Link><img src={tw} alt="link" width={"7%"} className="me-3" /></Link>
                            <Link><img src={yt} alt="link" width={"7%"} className="me-3   " /></Link>
                            <Link><img src={ig} alt="link" width={"7%"} /></Link>
                        </div>
                        <div className=" w-25">
                            <div className="row d-flex">
                                <div className="w-25  ">
                                    <img src={logo1} alt="image" width={"92%"} height={"80%"} />
                                </div>
                                <div className="w-75 ">
                                    <p><strong>100% ORIGINAL</strong>
                                        <span className="opt ms-1">guarantee for all products at pixel cart</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row d-flex">
                                <div className="w-25  ">
                                    <img src={logo2} alt="image" width={"90%"} height={"80%"} />
                                </div>
                                <div className="w-75 ">
                                    <p><strong>Return within 14 days</strong>
                                        <span className="opt ms-1">of receiving your order</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="container mt-3 ">
                        <p className="ms-5 head2name" ><b>POPULAR SEARCHES</b><span className="head2"></span></p>
                        <Link to={"#"} className="opt2  pe-2  ms-5">Makeup</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Dresses For Girls</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">T-Shirts</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Sandals</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Headphones</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Babydolls</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Blazers For Men</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Handbags</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Ladies Watches</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Bags</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Boxers</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Wallets</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Earrings</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Tops</Link><br />
                        <Link to={"#"} className="opt2 pe-2 ms-5">Reebok Shoes</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Puma Shoes</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Sport Shoes</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Fastrack Watches</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Kurtis</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Nike</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Smart Watches</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Titan Watches</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Designer Blouse</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Gowns</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Rings</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Cricket Shoes</Link><br />
                        <Link to={"#"} className="opt2 pe-2 ms-5 ">Forever 21</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Eye Makeup</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Photo Frames</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Punjabi Suits</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Bikni</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Myntra Fashion Show</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Lipstick</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Saree</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Watches</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Dresses</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Lehanga</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Goggles</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Bras</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Suit</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Chinos</Link><br />
                        <Link to={"#"} className="opt2 pe-2 ms-5">Nike Shoes</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Shoes</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Adidas Shoes</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Woodland Shoes</Link>
                        <Link to={"#"} className="opt2 pe-2 ps-2">Jewellery</Link>
                        <Link to={"#"} className="opt pe-2 ps-2">Designers Sarees</Link><br /><br /><br />
                        <div className="d-flex opt3 me-5 pe-5">
                            <div>
                                <span className="opt ms-5">In case of any consern,<Link to={"#"} className="opt2_link"><b>Contact us</b></Link></span>
                            </div>
                            <div>
                                <span className="opt">A Demo Website, by Sachin Singh Negi</span>
                            </div>
                        </div>

                    </div>
                </footer>

            </div>
        </>
    )
}

export default Footer;