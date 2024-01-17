import React from 'react'
import BookingForm from './BookingForm'

function Bookings(props) {
  return (
    <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} SubmitForm={props.SubmitForm}/>
  )
}

export default Bookings