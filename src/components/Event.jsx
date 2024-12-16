/* eslint-disable react/prop-types */
function Event({ event }) {
  const { day, date, name, address, time, link } = event;
  return (
    <a
      dir="rtl"
      href={link}
      className="event-box"
      target="_blank"
      rel="noreferrer"
    >
      <div className="event-date-box">
        <h4>{day}</h4>
        <p>{date}</p>
        <p>{time}</p>
      </div>
      <div className="event-detils-box">
        <div>{name}</div>
        <div className="event-address">{address}</div>
      </div>
    </a>
  );
}

export default Event;
