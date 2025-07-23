import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "../styles/signin.module.css"

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    let allUsers = JSON.parse(localStorage.getItem("users")) || [];
    let user = allUsers.find((i) => {
        return i.userEmail == email;
    });


    const navigate = useNavigate();

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailError("");
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setPasswordError("");
    };

    const handleSubmit = (e) => {
        e.preventdefault();

        setEmailError("");
        setPasswordError("");

        let isValid = true;

        if (email === "") {
            setEmailError("Please enter you email.");
            isValid = false;
        } else if (!email.includes(".com")) {
            setEmailError("Enter a valid email.");
            isValid = false;
        }
        if (password == "") {
            setPasswordError("Please enter your password.");
            isValid = false;
        } else if (password.length < 6) {
            setPasswordError("Incorrect password.");
            isValid = false;
        } else if (password === user.userPassword) {
            setPasswordError("Incorrect Password.");
            isValid = false;
        }

        if (isValid) {
            if (!user) {
                alert("No user found.");
            } else {
                if (password === user.userPassword) {
                    navigate("/");
                } else {
                    alert("Invalid Password.");
                }
            }
        }
    }

    return (
        <>
            <div className={`${Styles.signin_page} container-fluid pt-5 mb-4 vh-100`}>
                <div className="row justify-content-center">
                    <div className="col-lg-4 mt-5">
                        <div className={`card mt-4 ${Styles.signin_box}`}>
                            <form className="row  d-flex flex-column align-items-center p-5" onSubmit={handleSubmit}>
                                <div className="col-md-12">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="text" className={`${Styles.signin_input} form-control`} onChange={handleEmail} id="email" placeholder="Enter your email" />
                                    <p className="text-danger">{emailError && emailError}.</p>
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="text" className={`${Styles.signin_input} form-control`} onChange={handlePassword} id="password" placeholder="Enter your password" />
                                    <p className="text-danger">{passwordError && passwordError && passwordError}</p>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className={`${Styles.submitbtn_signin} btn w-100 mt-4`}>Log in now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin;