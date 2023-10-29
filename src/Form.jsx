import { useState } from "react";

export default function Form(){
    const [formData,setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comments:"",
        isFriendly: true,
        employment: "",
        favColor: 'red'
    });

    function handleChange(e){
        const {name,value,type,checked}= e.target
        setFormData((prevFormData) => {
            let newFormData=  { ...prevFormData, 
                [name]: type === 'checkbox' ? checked : value
             };

            //  console.log(newFormData);
             return newFormData;
        })
    }

    function submitForm(e){
        e.preventDefault();
        console.log(formData)
    }

    return (
    <form onSubmit={submitForm}>
        <input 
            type="text" 
            onChange={handleChange} 
            placeholder="First Name" 
            value={formData.firstName} 
            name='firstName'
        ></input>
        <br/>
        <input 
            type="text" 
            onChange={handleChange} 
            placeholder="Last Name" 
            value={formData.lastName} 
            name='lastName'
        ></input>
        <br/>
        <input 
            type="email" 
            onChange={handleChange} 
            placeholder="Email" 
            value={formData.email} 
            name="email"
        ></input>
        <br/>
        <textarea 
            onChange={handleChange} 
            placeholder="Comments" 
            value={formData.comments} 
            name="comments"
        ></textarea>
        <br/>
        <input 
            type="checkbox" 
            onChange={handleChange} 
            id="isFriendly" 
            checked={formData.isFriendly} 
            name="isFriendly"
        ></input>
        <label htmlFor="isFriendly">Are you Friendly?</label>
        <br/>
        <br/>
        <fieldset>
            <legend>Current Employment Status</legend>

            <input 
                type="radio" 
                id='unemployed' 
                onChange={handleChange} 
                checked={formData.employment=== 'unemployed'} 
                name="employment" 
                value="unemployed"
            />
            <label htmlFor="unemployed">Unemployed</label>
            <br/>

            <input 
                type="radio" 
                id='part-time' 
                onChange={handleChange} 
                checked={formData.employment=== 'part-time'} 
                name="employment" 
                value="part-time"
            />
            <label htmlFor="part-time">Part-Time</label>
            <br/>

            <input 
                type="radio" 
                id='full-time' 
                onChange={handleChange} 
                checked={formData.employment=== 'full-time'} 
                name="employment" 
                value="full-time"
                />
            <label htmlFor="full-time">Full-Time</label>
        </fieldset>

        <br/>
        <label htmlFor="favColor">What is your Favourite Color?</label>
        <br/>
        <select
            id='favColor'
            value={formData.favColor}
            onChange={handleChange}
            name="favColor"
        >
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="black">Black</option>
            <option value="violet">Violet</option>
        </select>
        <button>Submit</button>
    </form>   
    );
}