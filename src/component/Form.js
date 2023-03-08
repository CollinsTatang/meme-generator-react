import { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        Email: ""
    });

    function handleChange(event){
       
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
             <input
                type="email"
                placeholder="Last Name"
                onChange={handleChange}
                name="Email"
                value={formData.Email}
            />
        </form>
    )
}
export default Form;