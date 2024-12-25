/* eslint-disable react/prop-types */
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarPicker({ date, setDate, setShowCalendar }) {
  const handleDateChange = (newDate) => {
    setDate(newDate);
    setShowCalendar(false);
  };

  return (
    <div>
      {/* <h4 className="calendar-header">בחרו תאריך</h4> */}
      <Calendar
        locale="he-IL"
        onChange={handleDateChange}
        value={date}
        className="calendar-box"
      />
      {/* <p className="chosen-date">התאריך שנבחר: {date.toLocaleDateString("he-IL")}</p> */}
    </div>
  );
}

export default CalendarPicker;
