import './App.css';
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const App = () => {

  const [date, setDate] = useState(new Date())

  return (
    <Calendar
      onChange={setDate}
      value={date}
      maxDate={new Date()}
      minDate={new Date(1900, 1, 1)}
    />
  )
}

export default App