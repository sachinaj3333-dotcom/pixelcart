import { Link } from "react-router-dom";
import weblogo from "../../src/assets/images/weblogomain.png";


const Mobheader = () => {
    return (
        <>
            <nav class="navbar navbar-expand-sm bg-white border border-bottom shadow-sm sticky-top">
                <div class="container-xxl ms-5">
                    <Link class="navbar-brand" to={"/"}>
                        <img src={weblogo} alt="logo" height={50} />
                    </Link>
                    

                    

                    <div class="offcanvas-xl offcanvas-start" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasResponsiveLabel">Responsive offcanvas</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
                        </div>
                    </div>
                    <button class="btn btn-light " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Mobheader;