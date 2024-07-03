// src/components/Calendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar">
      <h2>Calendar</h2>
      <Calendar
        onChange={setDate}
        value={date}
      />
    </div>
  );
};

export default CalendarComponent;
