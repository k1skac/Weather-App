import React from "react";

const Form = props => (
        <div>
           <form onSubmit={props.getWeather}>
            <label>City:
                <input type="text" name="city" placeholder="City.."/>
            </label>
            <label>Country:
                 <input type="text" name="country" placeholder="Country.."/>
            </label> 
            <button type="submit">Get Weather</button>
           </form>
        </div>  
);

export default Form;
