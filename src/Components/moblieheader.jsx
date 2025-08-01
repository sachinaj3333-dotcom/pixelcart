import { Link } from "react-router-dom";
import weblogo from "../../src/assets/images/weblogomain.png";
import weboffcanlogo from "../assets/images/weblogo.png";
import headingoffcanvas from "../assets/images/categoryheading.jpg";
import shoppingbag from "../assets/images/empty-bag.png";


const Mobheader = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-white border border-bottom shadow-sm sticky-top">
                <div className="container-xxl ms-5">
                    <Link className="navbar-brand" to={"/"}>
                        <img src={weblogo} alt="logo" height={50} />
                    </Link>




                    <div className="offcanvas-xl offcanvas-start" tabIndex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
                        <div className="offcanvas-header offcanvas_head">
                            <Link to={"/"}><img src={weboffcanlogo} alt="img" height={35} /></Link>
                            <p className="offcanvas-title ms-5 offcan_heading" id="offcanvasResponsiveLabel">PixelCart: Your style, effortlessly delivered</p>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
                        </div>

                        {/* off canvas body */}



                        <div className="offcanvas-body offcan_body ">
                            <div className="row offcan_welcome pb-2">
                                <div className="col-7">
                                    <span className="greet">Hello, </span>
                                    <span ><Link className="offcan_signin" to={"/sign-in"}>Sign in</Link></span>
                                </div>
                                <div className="col-5">
                                    <span className="greet_opt">   New customer ? </span>
                                    <span><Link className="offcan_signup" to={"/sign-up"}>Sign up</Link></span>
                                </div>
                            </div>

                            <div className="offcan_opt1 mt-2 border-bottom">
                                <img src={headingoffcanvas} alt="img" className="w-100" />
                                <Link className="offcan_category1" to={"#"}>Men</Link><br />
                                <Link className="offcan_category2" to={"#"}>Women</Link><br />
                                <Link className="offcan_category3" to={"#"}>Kids</Link><br />
                                <Link className="offcan_category4" to={"#"}>Home</Link><br />
                                <Link className="offcan_category5" to={"#"}>Beauty</Link><br />
                                <Link className="offcan_category6" to={"#"}>Genz</Link><br />

                            </div>

                            <div className="mt-2">
                                <Link className="offcan_option">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-person " viewBox="0 0 16 16">
                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                        </svg>
                                    </span>
                                    <span className="ms-2">
                                        Profile
                                    </span>
                                </Link><br />
                                <Link className="offcan_option">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                        </svg>
                                    </span>
                                    <span className="ms-2">
                                        Wishlist
                                    </span>
                                </Link><br />
                                <Link className="offcan_option">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                        </svg>
                                    </span>
                                    <span className="ms-2">
                                        Bag
                                    </span>
                                </Link>
                            </div>
                            <div>
                                <img src={shoppingbag} alt="img" height={"250"} className="ms-5 mt-2" />
                                <div className="text-center letsgo">Let's go!</div>
                            </div>






                        </div>


                    </div>
                    <button className="btn btn-light " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Mobheader;