import React, { useState } from 'react'
import { Summary } from './summary'

const amountGuests = ["1", "2", "3", "4", "5", "6", "7", "8"];
const bookDates = ["Thursday", "Friday", "Saturday", "Sunday"];
const dinnerTimes = ["18.00", "18.30", "19.00", "19.30", "20.00", "20.30", "21.00", "21.30", "22.00"];

export const App = () => {
  /* const [page, setPage] = useState(firstQuestion); */
  const [showSummary, setShowSummary] = useState(false);
  const [location, setLocation] = useState("");
  const [amountGuest, setAmountGuest] = useState();
  const [bookDate, setBookDate] = useState();
  const [dinnerTime, setDinnerTime] = useState();
  const  [text, setText] = useState("");
  const [guestInfo, setGuestInfo] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [terms, setTerms] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  }

  return (
    <div className="content-container">
        <h1>Book a table at <span>Elsita & Alfredo</span></h1>
        <p>
          <span>Elsita & Alfredo</span> is a small family run authentic pizzeria. 
          Due to our small and intimate setting we don't have the space to accomodate groups larger than 8 people.
        </p>
        <p>
          PLease note that <span>Elsita & Alfredo</span> only accepts bookings for the upcoming weekend (Thur to Sun) of the current week.
          The booking for the week opens every Monday at 9.00. Luckily our delivery service delivers you favourite pizzas all days of the week, please 
          visit <a href="https://vibrant-ritchie-da31af.netlify.com">our website</a> for more information!
        </p>

        <form onSubmit={handleSubmit}>
          <div>
              <h2>Select the restaurant you'd like to visit below, to start your booking!</h2>
              <label className="dropdown">
                  <select className="dropdown-style"
                  onChange={event => setLocation(event.target.value)}
                  value={location}
                  required
                  >
                      <option value="">Select location:</option>
                      <option value="Stockholm">Stockholm</option>
                      <option value="Åre">Åre</option>
                      <option value="Visby">Visby</option>
                  </select>
              </label>
          </div>
          <div>
            <h2>How many will you be?</h2>
            <div className="radio-buttons">
               {amountGuests.map(guest => (
                    <label className="radio-container" key={guest}>
                        <input 
                            type="radio"
                            value={guest}
                            onChange={event => setAmountGuest(event.target.value)}
                            checked={amountGuest === guest}
                        />
                        <span className="radiomark"></span>
                        {guest}
                    </label>
                ))} 
            </div>
          </div>
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
          <div>
            <h2>Select a time:</h2>
            <div className="radio-buttons">
                {dinnerTimes.map(time => (
                    <label className="radio-container" key={time}>
                        <input 
                            type="radio"
                            value={time}
                            onChange={event => setDinnerTime(event.target.value)}
                            checked={dinnerTime === time}
                        />
                        <span className="radiomark"></span>
                        {time}
                    </label>
                ))}
            </div>
          </div>
          <div>
            <h2>Please let us know if you have any allergies, food preferences or anything else you want us to know:</h2>
            <label className="text" >
                <input
                    className="text-preferences"
                    type="text"
                    onChange={event => setText(event.target.value)}
                    value={text}
                />
            </label>
          </div>
          <div className="contact-container">
            <label className="text">
                <p>Name:</p>
                <input
                    className="text-contact"
                    placeholder="Name"
                    type="text"
                    onChange={event => setGuestInfo(event.target.value)}
                    value={guestInfo}
                    required
                />
            </label>
            <label className="text">
                <p>Email:</p>
                <input
                    className="text-contact"
                    placeholder="user@domain.com"
                    type="email"
                    onChange={event => setGuestEmail(event.target.value)}
                    value={guestEmail}
                    required
                />
            </label>
          </div>
          <div className="checkbox">
            <label className="radio-container" >
                I agree to the Terms and Conditions of <span>Elsita & Alfredo</span>
                <input
                    type="checkbox"
                    checked={terms}
                    onChange={event => setTerms(event.target.checked)}
                    required
                />
                <span className="checkmark"></span>
            </label>
          </div>
          <button type="submit">Submit</button> 
        </form>

        {showSummary && <Summary 
          name={guestInfo}
          date={bookDate}
          time={dinnerTime}
          guests={amountGuest}
          location={location}
        />
        }
    </div>
  );
};

/* return (
  <div>
    <button onclick={() => setPage(secondQuestion)}>Next</button>
    <button onclick={() => setPage(thirdQuestion)}>Next</button>
    <button onclick={() => setPage(fourthQuestion)}>Next</button>
    <button onclick={() => setPage(fifthQuestion)}>Next</button> 

    {page === 'firstQuestion' && (
      <div>
        <h1>Book a table at <span>Elsita & Alfredo</span></h1>
        <p>
          <span>Elsita & Alfredo</span> is a small family run authentic pizzeria. 
          Due to our small and intimate setting we don't have the space to accomodate groups larger than 8 people.
        </p>
        <p>
          PLease note that <span>Elsita & Alfredo</span> only accepts bookings for the upcoming weekend (Thur to Sun) of the current week.
          The booking for the week opens every Monday at 9.00. Luckily our delivery service delivers you favourite pizzas all days of the week, please 
          visit <a href="https://vibrant-ritchie-da31af.netlify.com">our website</a> for more information!
        </p>
        <form>
          <Dropdown />
        </form>  
        <button onclick={() => setPage(secondQuestion)}>Next</button>
      </div>
    )}

    {page === 'secondQuestion' && (
      <div>
        <form>
        <RadioButton1 />
        </form>
        <button onclick={() => setPage(thirdQuestion)}>Next</button>
      </div>
    )}

    {page === 'thirdQuestion' && (
      <div>
        <form>
        <RadioButton2 />
        <RadioButton3 />
        </form>
      </div>
    )}

    {page === 'fourthQuestion' && (
      <div>
       <form>
        <FreeText />
        </form>
        <button onclick={() => setPage(fifthQuestion)}>Next</button> 
      </div> 
    )}
    
    {page === 'fifthQuestion' && (
      <div>
        <form>
          <ContactDetails />
          <Checkbox />
        </form>
        <button type="submit" onClick={<Submit />}>Submit</button>
      </div>
    )}
  </div> */