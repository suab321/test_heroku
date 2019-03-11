import React from 'react';
import './App.css'


const Pop=(props)=>{
    console.log(props.data);
    return(
        <div id="pop">
        <div className="pop_content">
            <h5>Street:{props.data.address.street}</h5>
            <h5>City:{props.data.address.city}</h5>
            <h5>Suite:{props.data.address.suite}</h5>
            <h5>Zipcode:{props.data.address.zipcode}</h5>
        </div>
        </div>
    )
}

export default Pop;