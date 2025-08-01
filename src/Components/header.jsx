import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/weblogomain.png";
import Styles from "../styles/header.module.css"

const Header = () => {
    const location = useLocation();
    const currentPath = location.pathname;


    return (
        <>
            <nav className="navbar my_navbar navbar-expand-xl bg-white border border-bottom shadow-sm sticky-top">
                <div className="container-fluid ms-5">
                    <Link className="navbar-brand" to={"/"}>
                        <img src={logo} alt="img" height={50} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
                        <ul className={`nav nav-underline z-3 me-auto ${Styles.main_menu}`}>

                            {/* MEN's Section */}

                            <li className={`${Styles.menuitem} nav-item`}>
                                <Link className={`${Styles.nav_section} pb-4 ps-3 pe-3`} to={"#"}>MEN</Link>

                                {/* Men's sub menu 1 */}

                                <div className={` ${Styles.sub_menu_men_wrapper}`}>

                                    <div className={`${Styles.sub_menu_men1} col-2`}>
                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification}`} to={"#"}>Topwear</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>T-shirt</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Casual Shirt</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Formal Shirt</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Sweatshirt</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Sweaters</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Jackets</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Blazers & Coats</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Suits</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Rain Jackets</Link>
                                            </li>
                                            <li className="nav-item w-75">
                                                <hr />
                                            </li>
                                        </ul>

                                        <ul>
                                            <h6 >
                                                <Link className={`${Styles.product_specification}`} to={"#"} >Indian & Festive Wear</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Kurtas & Kurta Sets</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Sherwanis</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Nehru Jackets</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Dhotis</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Men's sub menu 2 */}

                                    <div className={`${Styles.sub_menu_men2} col-2`} >
                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification}`} to={"#"} >Bottomwear</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Jeans</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Casual Trousers</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Formal Trousers</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Shorts</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Track Pants & Joggers</Link>
                                            </li>
                                            <li className="nav-item w-75">
                                                <hr />
                                            </li>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification}`} to={"#"}>Innerwear & Sleepwear</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Briefs & Trunks</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Boxers</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>vests</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Sleepwear & Loungewear</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Thermals</Link>
                                            </li>
                                            <li className="nav-item w-75">
                                                <hr />
                                            </li>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification}`} to={"#"}>Plus Size</Link>
                                            </h6>
                                        </ul>
                                    </div>

                                    {/* Men's sub menu 3 */}

                                    <div className={`${Styles.sub_menu_men3} col-2`}>
                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification}`}>Footwear</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Casual Shoes</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Sport Shoes</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Formal Shoes</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Sneakers</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Sandals & Floaters</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Flip Flops</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Socks</Link>
                                            </li>
                                            <li className="nav-item w-75">
                                                <hr />
                                            </li>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification}`} to={"#"}>Personal Care & Grooming</Link>
                                            </h6>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification}`} to={"#"}>Sunglasses & Frames</Link>
                                            </h6>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification}`} to={"#"}>Watches</Link>
                                            </h6>
                                        </ul>
                                    </div>

                                    {/* Men's sub menu 4 */}

                                    <div className={`${Styles.sub_menu_men4} col-2`}>
                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification}`} to={"#"}>Sports & Active Wear</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Sports Shoes</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Sport Sandals</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Active T-Shirts</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Track Pants & Shorts</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Tracksuits</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Jackets & Sweatshirts</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Sport Accessories</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Swimwear</Link>
                                            </li>
                                            <li className="nav-item w-75">
                                                <hr />
                                            </li>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification}`} to={"#"}>Gadgets</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Smart Wearables</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Fitness Gadgets</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Headphones</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Speakers</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Men's sub menu 5 */}

                                    <div className={`${Styles.sub_menu_men5} col-2`}>
                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification}`} to={"#"}>Fashion Accessories</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Wallets</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Belts</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Perfumes & Body Mists</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Trimmers</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Deodorants</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Ties,Cufflinks & Pocket Squares </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Accessory Gift sets</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Caps & Hats</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Mufflers,Scarves & Gloves</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Phone Cases</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Rings & Wristwear</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Helmets</Link>
                                            </li>
                                            <li className="nav-item w-75">
                                                <hr />
                                            </li>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification}`} to={"#"}>Bags & Backpacks</Link>
                                            </h6>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification}`} to={"#"}>Luggages & Trolleys</Link>
                                            </h6>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            {/* WOMEN's Section */}

                            <li className={`${Styles.menuitem2} nav-item`}>
                                <Link className={`${Styles.nav_section2} pb-4 ps-3 pe-3`} to={"#"}>WOMEN</Link>

                                {/* Women's sub-menu1 */}


                                <div className={`${Styles.sub_menu_women_wrapper}`}>

                                    <div className={`${Styles.sub_menu_women1} col-2`}>
                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification2}`} to={"#"}>Indian and Fusion Wear</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"} >Kurtas & Suits</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"} >Kurtis, Tunics & Tops</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"} >Sarees</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"} >Ethnic Wear</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"} >Leggings, Salwars & Churidars</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"} >Skirts & Palazzos</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"} >Dress Materials</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"} >Lehenga Cholis</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"} >Dupattas & Shawls</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"} >Jackets</Link>
                                            </li>
                                            <li className="nav-item w-75">
                                                <hr />
                                            </li>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification2}`} to={"#"}>Belts, Scarves & More</Link>
                                            </h6>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification2}`} to={"#"}>Watches & Wearables</Link>
                                            </h6>
                                        </ul>
                                    </div>

                                    {/* Women's sub menu 2 */}

                                    <div className={`${Styles.sub_menu_women2} col-2`}>
                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification2}`} to={"#"}>Western Wear</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Dresses</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Tops</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Tshirts</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Jeans</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Trousers & Capris</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Shorts & Skirts</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Co-ords</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Playsuits</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Jumpsuits</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Shrugs</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Sweaters & Sweatshirts</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Jackets & Coats</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Blazers & WaistCoats</Link>
                                            </li>
                                            <li className="nav-item w-75">
                                                <hr />
                                            </li>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification2}`} to={"#"}>Plus Size</Link>
                                            </h6>
                                        </ul>
                                    </div>

                                    {/* Women's sub menu 3 */}

                                    <div className={`${Styles.sub_menu_women3} col-2`}>
                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification2}`} to={"#"}>Maternity</Link>
                                            </h6>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification2}`} to={"#"}>Sunglasses & Frames</Link>
                                            </h6>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification2}`} to={"#"}>Footwear</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Flats</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Casual Shoes</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Heels</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Boots</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Sports Shoes & Floaters</Link>
                                            </li>
                                            <li className="nav-item w-75">
                                                <hr />
                                            </li>
                                        </ul>
                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification2}`} to={"#"}>Sports & Active Wear</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Clothing</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Footwear</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Sports Accessories</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Sports Equipment</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Women's sub-menu 4 */}

                                    <div className={`${Styles.sub_menu_women4} col-2`}>
                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification2}`} to={"#"}>Lingerie & Sleepwear</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Bra</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Briefs</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Shapewear</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Sleepwear & Loungewear</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Swimwear</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Camisoles & Thermals</Link>
                                            </li>
                                            <li className="nav-item w-75">
                                                <hr />
                                            </li>
                                        </ul>
                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification2}`} to={"#"}>Beauty & Personal Care</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Makeup</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Skincare</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Premium Beauty</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Lipsticks</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Fragrances</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Women's sub menu 5 */}

                                    <div className={`${Styles.sub_menu_women5} col-2`}>
                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification2}`} to={"#"}>Gadgets</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Smart Wearables</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Fitness Gadgets</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Headphones</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Speakers</Link>
                                            </li>
                                            <li className="nav-item w-75">
                                                <hr />
                                            </li>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification2}`} to={"#"}>Jewellery</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Fashion Jewellery</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Fine Jewellery</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Earrings</Link>
                                            </li>
                                            <li className="nav-item w-75">
                                                <hr />
                                            </li>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification2}`} to={"#"}>Backpacks</Link>
                                            </h6>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification2}`} to={"#"}>Handbags, Bags & Wallets</Link>
                                            </h6>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification2}`} to={"#"}>Luggages & Trolleys</Link>
                                            </h6>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            {/* KIDS SECTION */}


                            <li className={`${Styles.menuitem3} nav-item`}>
                                <Link className={`${Styles.nav_section3} pb-4 ps-3 pe-3`} to={"#"}>KIDS</Link>

                                {/* Kid's sub menu 1 */}

                                <div className={`${Styles.sub_menu_kids_wrapper}`}>

                                    <div className={`${Styles.sub_menu_kid1} col-2`}>
                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification3}`} to={"#"}>Boys Clothing</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>T-Shirts</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Shirts</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Shorts</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Jeans</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Trousers</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Clothing Sets</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Ethnic Wear</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Track Pants & Pyjamas</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Jacket, Sweater & Sweatshirts</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Party Wear</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Innerwear & Thermals</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Nightwear & Loungewear</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Value Packs</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Kid's sub menu 2 */}

                                    <div className={`${Styles.sub_menu_kid2} col-2`}>
                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification3}`} to={"#"}>Girls Clothing</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Dresses</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Tops</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Tshirts</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Clothing Sets</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Lehenga Choli</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Kurta Sets</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Party Wear</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Dungarees & Jumpsuits</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Skirts & Shorts</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Tights & Leggings</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Jeans, Trousers & Capris</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Jacket, Sweater & Sweatshirts</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Innerwear & Thermals</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Nightwear & Loungewear</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Value packs</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Kid sub menu 3 */}

                                    <div className={`${Styles.sub_menu_kid3} col-2`}>
                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification3}`} to={"#"}>Footwear</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Casual Shoes</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Flipflops</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Sports Shoes</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Flats</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Sandals</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Heels</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Schools Shoes</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Socks</Link>
                                            </li>
                                            <li className="nav-item w-75">
                                                <hr />
                                            </li>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification3}`} to={"#"}>Toys & games</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Learning & Development</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Activity Toys</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Soft Toys</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Action Figure / Play set</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Kid's sub menu 4 */}

                                    <div className={`${Styles.sub_menu_kid4} col-2`}>
                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification3}`} to={"#"}>Infants</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Bodysuits</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Rompers & Sleepsuits</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Clothing Sets</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Tshirts & Tops</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Dresses</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Bottom Wear</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Winter Wear</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Innerwear & Sleepwear</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Infant Care</Link>
                                            </li>
                                            <li className="nav-item w-75">
                                                <hr />
                                            </li>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification3}`} to={"#"}>Home & Bath</Link>
                                            </h6>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification3}`} to={"#"}>Personal Care</Link>
                                            </h6>
                                        </ul>
                                    </div>

                                    {/* Kid's sub menu 5 */}

                                    <div className={`${Styles.sub_menu_kid5} col-2`}>
                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification3}`} to={"#"}>Kids Accessories</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Bags & Backpacks</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Watches</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Jewellery & Hair Accessory</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Sunglasses</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Masks & Protective Gears</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Caps & Hats</Link>
                                            </li>
                                            <li className="nav-item w-75">
                                                <hr />
                                            </li>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification3}`} to={"#"}>Brands</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>H&M</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Max Kids</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Pantaloons</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>United Colors Of Benetton Kids</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>YK</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>U.S. Polo Assn. Kids</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Mothercare</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>HRX</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            {/* HOME SECTION */}

                            <li className={`${Styles.menuitem4} nav-item`}>
                                <Link className={`${Styles.nav_section4} pb-4 ps-3 pe-3`} to={"#"}>HOME</Link>

                                {/* Home sub menu 1 */}

                                <div className={`${Styles.sub_menu_home_wrapper}`}>

                                    <div className={`${Styles.sub_menu_home1} col-2`}>
                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification4}`} to={"#"}>Bed Linen & Furnishing</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Bed Runners</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Mattress Protectors</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Bedsheets</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Bedding Sets</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Blankets, Quilts & Dohars</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Pillows & Pillow Cover</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Diwan Sets</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Chair Pads & Covers Runners</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Sofa Covers</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Bed Covers</Link>
                                            </li>
                                            <li className="nav-item w-75">
                                                <hr />
                                            </li>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification4}`} to={"#"}>Flooring</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Floor Runners</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Carpets</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Floor Mats & Dhurries</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Door Mats</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Home sub menu 2 */}

                                    <div className={`${Styles.sub_menu_home2} col-2`}>
                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification4}`} to={"#"}>Bath</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`}>Bath Towels</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`}>Hand & Face Towels</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`}>Beach Towels</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`}>Towels Set</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`}>Bath Rugs</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`}>Bath Robes</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`}>Bathroom Accessories</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`}>Shower Curtains</Link>
                                            </li>
                                            <li className="nav-item w-75">
                                                <hr />
                                            </li>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification4}`} to={"#"}>Lamps & Lighting</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Floor Lamps</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Ceiling Lamps</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Table Lamps</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Wall Lamps</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Outdoor Lamps</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>String Lamps</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Home sub menu 3 */}

                                    <div className={`${Styles.sub_menu_home3} col-2`}>
                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification4}`} to={"#"}>Home Decor</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Plants & Planters</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Aromas & Candles</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Clocks</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Mirrors</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Wall Decor</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Festive Decor</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Pooja Esentials</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Wall Shelves</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Fountains</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Showpieces & Vases</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Ottoman</Link>
                                            </li>
                                            <li className="nav-item w-75">
                                                <hr />
                                            </li>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification4}`} to={"#"}>Cushions & Cushion Covers</Link>
                                            </h6>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification4}`} to={"#"}>Curtains</Link>
                                            </h6>
                                        </ul>
                                    </div>

                                    {/* Home sub menu 4 */}

                                    <div className={`${Styles.sub_menu_home4} col-2`}>
                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification4}`} to={"#"}>Furniture</Link>
                                            </h6>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification4}`} to={"#"}>Home Gift Sets</Link>
                                            </h6>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification4}`} to={"#"}>Kitchen & Table</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Table Runners</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Dinnerware & Serveware</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Cups & Mugs</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Bakeware & Cookware</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Kitchen Storage & Tools</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Bar & Drinkware</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Table Covers & Furnishing</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Home sub menu 5 */}

                                    <div className={`${Styles.sub_menu_home5} col-2`}>
                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification4}`} to={"#"}>Storage</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Bins</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Hangers</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Organisers</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Hooks & Holders</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Laundry Bags</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            {/*  BEAUTY SECTION */}


                            <li className={`${Styles.menuitem5} nav-item`}>
                                <Link className={`${Styles.nav_section5} pb-4 ps-3 pe-3`} to={"#"}>BEAUTY</Link>

                                {/* Sub menu beauty 1 */}

                                <div className={`${Styles.sub_menu_beauty_wrapper}`}>

                                    <div className={`${Styles.sub_menu_beauty1} col-2`}>
                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification5}`} to={"#"}>Makeup</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Lipstick</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Lip Gloss</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Lip Liner</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Mascara</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Eyeliner</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Kajal</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Eyeshadow</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Foundation</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Primer</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Concealer</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Compact</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Nail Polish</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Sub menu beauty 2 */}

                                    <div className={`${Styles.sub_menu_beauty2} col-2`}>
                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification5}`} to={"#"}>Skincare, Bath & Body</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Face Moisturiser</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Cleanser</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Masks & Peel</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Sunscreen</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Serum</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Face Wash</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Eye Cream</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Lip Balm</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Body Lotion</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Body Wash</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Body Scrub</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Hand Cream</Link>
                                            </li>
                                            <li className="nav-item w-75">
                                                <hr />
                                            </li>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification5}`} to={"#"}>Baby Care</Link>
                                            </h6>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification5}`} to={"#"}>Masks</Link>
                                            </h6>
                                        </ul>
                                    </div>

                                    {/* Sub menu beauty 3 */}

                                    <div className={`${Styles.sub_menu_beauty3} col-2`}>
                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification5}`} to={"#"}>Haircare</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`}>Shampoo</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`}>Conditioner</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`}>Hair Cream</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`}>Hair Oil</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`}>Hair Gel</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`}>Hair Color</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`}>Hair Serum</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`}>Hair Accessory</Link>
                                            </li>
                                            <li className="nav-item w-75">
                                                <hr />
                                            </li>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification5}`} to={"#"}>Fragrances</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Perfume</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Deodorant</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Body Mist</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Sub menu beauty 4 */}

                                    <div className={`${Styles.sub_menu_beauty4} col-2`}>
                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification5}`} to={"#"}>Appliances</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Hair Straightener</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Hair Dryer</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Epilator</Link>
                                            </li>
                                            <li className="nav-item w-75">
                                                <hr />
                                            </li>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification5}`} to={"#"}>Men's Grooming</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Trimmers</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Beard Oil</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Hair Wax</Link>
                                            </li>
                                            <li className="nav-item w-75">
                                                <hr />
                                            </li>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification5}`} to={"#"}>Beauty Gift & Makeup Set</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Beauty Gift</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Makeup Kit</Link>
                                            </li>
                                            <li className="nav-item w-75">
                                                <hr />
                                            </li>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification5}`} to={'"#'}>Premium Beauty</Link>
                                            </h6>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification5}`} to={'"#'}>Wellness & Hygiene</Link>
                                            </h6>
                                        </ul>
                                    </div>

                                    {/* Sub menu beauty 5 */}

                                    <div className={`${Styles.sub_menu_beauty5} col-2`}>
                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification5}`} to={"#"}>Top Brands</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Lakme</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Maybelline</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>LOreal</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Philips</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Bath & Body Works</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>THE BODY SHOP</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Biotique</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Mamaearth</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>MCaffeine</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Nivea</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Lotus Herbals</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>LOreal Professionel</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>KAMA AYURVEDA</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>M.A.C</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Forest Essentials</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            {/* Genz Section */}


                            <li className={`${Styles.menuitem6} nav-item`}>
                                <Link className={`${Styles.nav_section6} pb-4 ps-3 pe-3`} to={"#"}>GENZ</Link>

                                {/* Sub menu genz 1 */}

                                <div className={`${Styles.sub_menu_genz_wrapper}`}>

                                    <div className={`${Styles.sub_menu_genz1} col-2`}>
                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification6}`} to={"#"}>Women's Western Wear</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Dresses Under ₹599</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Tops Under ₹399</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Jeans Under ₹599</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Trousers Under ₹699</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>T-shirts Under ₹299</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Shirts Under ₹499</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Skirts Under ₹499</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Shorts Under ₹699</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Co-ords Under ₹799</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Jumpsuits Under ₹899</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Track Pants Under ₹699</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Jackets Under ₹899</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Sweatshirts Under ₹699</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Sweaters Under ₹899</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Sub menu genz 2 */}

                                    <div className={`${Styles.sub_menu_genz2} col-2`}>
                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification6}`} to={"#"}>Women's Ethnic Wear</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Kurtas Under ₹399</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Kurtis Under ₹499</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Kurta sets Under ₹499</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Ethnic Dresses Under ₹999</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Palazzos Under ₹799</Link>
                                            </li>
                                            <li className="nav-item w-75">
                                                <hr />
                                            </li>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification6}`} to={"#"}>Lingerie & Loungewear</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Bras Under ₹399</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Night suits Under ₹799</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Nightdresses Under ₹999</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Lounge pants Under ₹999</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Briefs Under ₹599</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Sub menu genz 3 */}

                                    <div className={`${Styles.sub_menu_genz3} col-2`}>
                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification6}`} to={"#"}>Men's Casual Wear</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>T-shirts Under ₹299</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Shirts Under ₹499</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Jeans Under ₹599</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Trousers Under ₹699</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Shorts Under ₹599</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Track Pants Under ₹699</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Jackets Under ₹899</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Sweatshirts Under ₹699</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Sweaters Under ₹999</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Co-ords Under ₹999</Link>
                                            </li>
                                            <li className="nav-item w-75">
                                                <hr />
                                            </li>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification6}`} to={"#"}>Men's Occassion Wear</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Kurtas Under ₹799</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Kurta Sets Under ₹999</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Sub menu genz 4 */}

                                    <div className={`${Styles.sub_menu_genz4} col-2`}>
                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification6}`} to={"#"}>Women's Footwear</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Heels Under ₹599</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Flats Under ₹499</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Casual shoes Under ₹699</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Sports shoes Under ₹999</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Flip flops Under ₹799</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Boots Under ₹999</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Ballerinas Under ₹799</Link>
                                            </li>
                                            <li className="nav-item w-75">
                                                <hr />
                                            </li>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification6}`} to={"#"}>Men's Footwear</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Casual shoes Under ₹799</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Sports shoes Under ₹999</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Formal shoes Under ₹999</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Sandals Under ₹799</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Flip flops Under ₹499</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Boots Under ₹999</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Sub menu genz 5 */}

                                    <div className={`${Styles.sub_menu_genz5} col-2`}>
                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification6}`} to={"#"}>Beauty & Grooming</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Skincare Under ₹299</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Haircare Under ₹399</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Bath & Body Under ₹399</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>MakeUp Under ₹299</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Fragrances Under ₹399</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Appliances Under ₹999</Link>
                                            </li>
                                            <li className="nav-item w-75">
                                                <hr />
                                            </li>
                                        </ul>

                                        <ul>
                                            <h6>
                                                <Link className={`${Styles.product_specification6}`} to={"#"}>Accessories</Link>
                                            </h6>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Jewellery Under ₹299</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Handbags Under ₹499</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Clutches Under ₹999</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Backpacks Under ₹699</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Wallets Under ₹499</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Sunglasses Under ₹699</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Belts Under ₹799</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`${Styles.product_type}`} to={"#"}>Caps Under ₹899</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>



                        <div className="searchbar d-flex border rounded-2 ms-5" role="search">
                            <button className="btn border-0" type="search">
                                <span className="input-group-text border-0" id="visible-addon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg></span>
                            </button>
                            <input className={`${Styles.searchinput} me-2 border-0`} type="search" placeholder="Search for products,brands and more" aria-label="Search" />
                        </div>


                        <div className="navthreesections">
                            <div className={`${Styles.nav_section0} conatiner-fluid`}>
                                <ul className={`${Styles.nav_section01}  d-flex mb-0`}>
                                    {
                                        (currentPath !== "/sign-up" && currentPath !== "/sign-in") ? (
                                            <li className={`${Styles.nav_section_profile} me-4 z-3`}>
                                                <span className="ms-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                                </svg></span><br />
                                                <span className={`${Styles.nav_section_profile_name} pb-3`}>Profile</span>

                                                {/* sub menu profile */}

                                                <div className={`${Styles.sub_menu_profile} col-2`}>
                                                    <div>
                                                        <h6 className="mb-0">Welcome</h6>
                                                        <p>To access account and manage orders</p>
                                                        <Link to={"/sign-in"}>
                                                            <button className={`${Styles.btnprofile} pb-0 pt-0 me-5`}>LOGIN</button>
                                                        </Link>
                                                        <Link to={"/sign-up"}>
                                                            <button className={`${Styles.btnprofile} pt-0 pb-0`}>SIGNUP</button>
                                                        </Link>
                                                    </div>
                                                    <hr />
                                                    <div>
                                                        <ul className={`${Styles.profile_content} pb-2`}>
                                                            <li>
                                                                <Link className={`${Styles.product_type2}`} to={"#"}>Orders</Link>
                                                            </li>
                                                            <li>
                                                                <Link className={`${Styles.product_type2}`} to={"#"}>Wishlist</Link>
                                                            </li>
                                                            <li>
                                                                <Link className={`${Styles.product_type2}`} to={"#"}>Gift Cards</Link>
                                                            </li>
                                                            <li>
                                                                <Link className={`${Styles.product_type2}`} to={"#"}>Contact Us</Link>
                                                            </li>
                                                            <li>
                                                                <Link className={`${Styles.product_type2}`} to={"#"}>Insider</Link>
                                                            </li>
                                                            <li>
                                                                <hr />
                                                            </li>
                                                            <li>
                                                                <Link className={`${Styles.product_type2}`} to={"#"}>Coupons</Link>
                                                            </li>
                                                            <li>
                                                                <Link className={`${Styles.product_type2}`} to={"#"}>Saved Cards</Link>
                                                            </li>
                                                            <li>
                                                                <Link className={`${Styles.product_type2}`} to={"#"}>Saved VPA</Link>
                                                            </li>
                                                            <li>
                                                                <Link className={`${Styles.product_type2}`} to={"#"}>Saved Addresses</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        ) : (
                                            null
                                        )
                                    }


                                    <Link className={`${Styles.nav_section01_content}`} to={"#"}>
                                        <li className="me-4">
                                            <span className="ms-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                            </svg></span><br />
                                            <span>Wishlist</span>
                                        </li>
                                    </Link>

                                    <Link className={`${Styles.nav_section01_content}`} to={"#"}>
                                        <li className="me-5">
                                            <span className="ms-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                            </svg></span><br />
                                            <span>Bag</span>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Header;