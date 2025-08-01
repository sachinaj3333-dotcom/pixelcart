import { Link } from "react-router-dom";
import weblogo from "../../src/assets/images/weblogomain.png";


const Mobheader = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-white border border-bottom shadow-sm sticky-top">
                <div className="container-xxl ms-5">
                    <Link className="navbar-brand" to={"/"}>
                        <img src={weblogo} alt="logo" height={50} />
                    </Link>
                    

                    

                    <div className="offcanvas-xl offcanvas-start" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">Responsive offcanvas</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
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