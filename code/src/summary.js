import React from 'react'

export const Summary = (props) => {
    
    return (
        <section>
            <h1>Welcome {props.name}</h1>
            <p>We're looking forward to having you come dine with us on {props.date} at {props.time}.
            You have booked one table for {props.guests} at our {props.location} restaurant.</p>
        </section>
    );
};


