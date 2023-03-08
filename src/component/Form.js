import { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comment: "",
        isFriendly: true,
        employment: "",
        favColor: ""
    });


    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData)

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

    return (
        <form onSubmit={handleSubmit}>
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
                name="email"
                value={formData.Email}
            />
            <textarea 
            placeholder="Comment" 
            onChange={handleChange}
            name="comment" 
            value={formData.comment} />

            <input 
            type="checkbox" 
            id="isFriendly"
            name="isFriendly"
            onChange={handleChange}
            checked={formData.isFriendly} />

            <label htmlFor="isfriendly">Are You Friendly</label>
            <fieldset>
                <legend>Current Employment Status</legend>
            
            <input 
            type="radio"
            id="unemployed"
            name="emploment"
            value="unemployed"
            onChange={handleChange}
            checked={formData.employment === "unemployed"} 
             />
              <label htmlFor="unemployed">Unemployed</label>
            <input 
            type="radio"
            id="part-time"
            name="employment"
            value="part-time"
            onChange={handleChange}
            checked={formData.employment === "part-time"} 
             />
              <label htmlFor="part-time">Part-time</label>
            <input 
            type="radio"
            id="full-time"
            name="employment"
            value="full-time"
            onChange={handleChange}
            checked={formData.employment === "full-time"} 
             />
              <label htmlFor="full-time">Full-time</label>
            </fieldset>
            <br />
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
            id="favColor"
            value={formData.favColor}
            name="favColor"
            onChange={handleChange}
            >
                <option value="">--Choose--</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    )
}
export default Form;