import './App.css';
import React, { useState, useEffect, useRef } from 'react'

function App() {

  // Date: 1..31
  // Day: 0..6 (sun..sat)

  const date = new Date();
  const [month, setMonth] = useState('')
  const [auxMonth, setAuxMonth] = useState('')
  const monthDays = useRef();

  const renderCalendar = () => {
    date.setDate(1);


    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    const prevLastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();

    const firstDayIndex = date.getDate();

    const lastDayIndex = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    setMonth(months[date.getMonth()]);

    setAuxMonth(new Date().toDateString());

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
      days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
      if (
        i === new Date().getDate() &&
        date.getMonth() === new Date().getMonth()
      ) {
        days += `<div class="today">${i}</div>`;
      } else {
        days += `<div>${i}</div>`;
      }
    }

    for (let j = 1; j <= nextDays; j++) {
      days += `<div class="next-date">${j}</div>`;
      monthDays.current.innerHTML = days;
    }
  }

  const handlePrev = () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
  }

  const handleNext = () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
  }

  useEffect(() => {
    renderCalendar();
  }, [])

  return (
    <div class="container">
      <div class="calendar">
        <div class="month">
          <i class="fas fa-angle-left prev" onClick={handlePrev}></i>
          <div class="date">
            <h1>{month}</h1>
            <p>{auxMonth}</p>
          </div>
          <i class="fas fa-angle-right next" onClick={handleNext}></i>
        </div>
        <div class="weekdays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div class="days" ref={monthDays}></div>
      </div>
    </div>
  );
}

export default App;
