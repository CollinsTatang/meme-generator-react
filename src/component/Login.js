import { useState } from "react";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        newsLetter: true
    });
    

    function handleSubmit(event) {
        event.preventDefault();
        if(formData.password === formData.confirmPassword){
            console.log("Sucessfully signed up")
        } else{
            console.log("Password do not match")
        }

        if(formData.newsLetter){
            console.log("Thanks for signing up")
        }

    }
    function handleChange(event){
        const {name, value, type, checked} = event.target
         setFormData(prevFormData => {
             return {
                 ...prevFormData,
                 [name]: type === "checkbox" ? checked : value
             }
         })
     }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <length>Login</length>
                    <input 
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    />
                     <input 
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    />
                     <input 
                    type="confirmPassword"
                    name="confirmPassword"
                    placeholder="Password Confirm"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    />
                    <input 
                    type="checkbox" 
                    id="newsLetter"
                    name="newsLetter"
                    onChange={handleChange}
                    checked={formData.newsLetter} 
                    />
                    <label htmlFor="newsLetter">I want to join the newsletter</label>

                    <button>Sign Up</button>
                </fieldset>

            </form>
        </div>
    )
}
export default Login;