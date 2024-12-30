/* eslint-disable react/prop-types */
function Event({ event }) {
  const { day, date, name, address, time, link } = event;
  return (
    <a
      dir="rtl"
      href={link || undefined}
      onClick={(e) => {
        if (!link) e.preventDefault();
      }}
      className="event-box"
      target="_blank"
      rel="noreferrer"
    >
      <div className="event-date-box">
        <h4>{day}</h4>
        <p>{date}</p>
        <p>{time}</p>
      </div>
      <div className="event-details-box">
        <div>{name}</div>
        <div className="event-address">{address}</div>
      </div>
      <p className={`${!link ? "details-soon" : "more-details"}`}>
        {!link ? (
          <>
            פרטים <br /> בקרוב
          </>
        ) : (
          <>
            לפרטים <br /> נוספים
          </>
        )}
      </p>
    </a>
  );
}

export default Event;
