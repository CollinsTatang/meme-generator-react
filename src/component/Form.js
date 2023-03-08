import { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: ""
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
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
            />
        </form>
    )
}
export default Form;