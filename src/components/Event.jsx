/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";

function Event({ event }) {
  // const { day, date, name, address, time, link } = event;
  const { t } = useTranslation();
  const link = t(`events.eventsDetails.${event}.link`);
  return (
    <a
      href={link || undefined}
      onClick={(e) => {
        if (!link) e.preventDefault();
      }}
      className="event-box"
      target="_blank"
      rel="noreferrer"
    >
      <div className="event-date-box">
        <h4>{t(`events.eventsDetails.${event}.day`)}</h4>
        <p>{t(`events.eventsDetails.${event}.date`)}</p>
        <p>{t(`events.eventsDetails.${event}.time`)}</p>
      </div>
      <div className="event-details-box">
        <div>{t(`events.eventsDetails.${event}.name`)}</div>
        <div className="event-address">
          {t(`events.eventsDetails.${event}.address`)}
        </div>
      </div>
      <p className={`${!link ? "details-soon" : "more-details"}`}>
        {!link ? (
          <>{t("events.detailsSoon")}</>
        ) : (
          <>{t("events.moreDetails")}</>
        )}
      </p>
    </a>
  );
}

export default Event;
