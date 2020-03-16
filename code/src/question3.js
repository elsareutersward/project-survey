import React, { useState } from "react";

const bookDates = ["Thursday", "Friday", "Saturday", "Sunday"];

export const RadioButton2 = () => {
    const [bookDate, setBookDate] = useState();

    return (
        <div>
            <h2>Select a date:</h2>
            <div className="radio-buttons">
                {bookDates.map(date => (
                    <label className="radio-container" key={date}>
                        <input 
                            type="radio"
                            value={date}
                            onChange={event => setBookDate(event.target.value)}
                            checked={bookDate === date}
                        />
                        <span className="radiomark"></span>
                        {date}
                    </label>
                ))}
            </div>
        </div>
        
    );
};