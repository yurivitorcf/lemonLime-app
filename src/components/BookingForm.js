import React, { useState } from 'react'

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  }

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  }
    return (
      <header>
        <section>
          <form onSubmit={handleSubmit}>
            <fieldset className='formField'>
              {/* choosing date*/}
              <div>
                <label htmlFor='book-date'>Choose Date:</label>
                <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} type='date' required/>
              </div>
              {/* choosing time*/}
              <div>
                <label htmlFor='book-time'>Choose Time:</label>
                <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                  <option value=""> Select a time</option>
                  {
                    props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
                  }
                </select>
              </div>
              {/* selecting number of guets*/}
              <div>
                <label htmlFor='book-guests'>Number of guests:</label>
                <input id='book-guests' min="1" value={guests} onChange={(e) => {setGuests(e.target.value)}} type={"number"} placeholder={0} max={10} required/>
              </div>
              {/* occasion*/}
              <div>
                <label htmlFor='book-occasion'>Occasion:</label>
                <select id='book-occasion' key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                  <option value="">Select an option</option>
                  <option>Anniversary</option>
                  <option>Company party</option>
                </select>
              </div>
              <div className='btnReceive'>
                <input arial-label='On Click' type={"submit"} value={"Make your reservation"}/>
              </div>
            </fieldset>
          </form>
        </section>
      </header>
    )
  }

export default BookingForm;
