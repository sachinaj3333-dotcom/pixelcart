import { useState } from "react"
import Styles from "../styles/signup.module.css"

const Signup = () => {
    const [name, setName] = useState("");
    const [mobno, setMobno] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [nameError, setNameError] = useState("");
    const [mobnoError, setMobnoError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [checkError, setCheckError] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
        setNameError("");
    };
    const handleMobno = (e) => {
        setMobno(e.target.value);
        setMobnoError("");
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailError("");
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setPasswordError("");
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        setNameError("");
        setMobnoError("");
        setEmailError("");
        setPasswordError("");

        let isValid = true;

        if (name === "") {
            setNameError("Name is required.");
            isValid = false;
        }
        if (mobno === "") {
            setMobnoError("Mobile Number is required.")
            isValid = false;
        } else if (mobno.length < 10) {
            setMobnoError("Please check your mobile number.");
            isValid = false;
        }
        if (email === "") {
            setEmailError("Email is required.");
            isValid = false;
        } else if (!email.includes(".com")) {
            setEmailError("Only .com domain is acceptable.");
        }
        if (password === "") {
            setPasswordError("Password is required.");
            isValid = false;
        } else if (password.length < 8) {
            setPasswordError("Minimum 8 characters is required.");
            isValid = false;
        }
        if (!isChecked) {
            setCheckError("You must confirm it.");
            isValid = false;
        }

        if (isValid) {
            let user = {
                id: Date.now(),
                name: name,
                userEmail: email,
                userPassword: password,
            };

            let existingUser = JSON.parse(localStorage.getItem("users")) || [];
            existingUser.push(user);
            localStorage.setItem("users", JSON.stringify(existingUser));

            //Clear from field from successful submission

            setName("");
            setMobno("");
            setEmail("");
            setPassword("");
            alert("Submitted Successfully!");
        } else {
            alert("Please corrects the error in the form.")
            console.log("Validation errors exist.");

        }
    };


    return (
        <>
            <div className={`${Styles.signup_page} container-fluid pt-5 mb-4 vh-100`}>
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className={`card border ${Styles.signup_box}`}>
                            <form className="signup row g-2 d-flex flex-column align-items-center p-5" onSubmit={handleSubmit}>
                                <div className="col-md-12">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className={`${Styles.forminput} form-control`} onChange={handleName} id="name" placeholder="Enter your name" />
                                    <p className="text-danger">{nameError && nameError}</p>
                                </div>
                                <div className="col-md-12">
                                    <label for="mobno">Mobile Number</label>
                                    <div className="input-group ">
                                        <div className="input-group-text">+91</div>
                                        <input type="text" className={`${Styles.forminput} form-control`} onChange={handleMobno} id="mobno" placeholder="Username" />
                                    </div>
                                    <p className="text-danger">{mobnoError && mobnoError}</p>
                                </div>

                                <div className="col-md-12">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className={`${Styles.forminput} form-control`} onChange={handleEmail} id="email" placeholder="Enter your email" />
                                    <p className="text-danger">{emailError && emailError}</p>
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className={`${Styles.forminput} form-control`} onChange={handlePassword} id="password" />
                                    <p className="text-danger">{passwordError && passwordError}</p>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="confirm"  checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} id="checkDefault"/>
                                        <label className="form-check-label" for="checkDefault">
                                            I am above 18 years old.
                                        </label>
                                        <p className="text-danger">{checkError && checkError}</p>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className={`${Styles.btnsubmit} btn w-100`}>SIGN UP</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Signup