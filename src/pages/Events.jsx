import events from "../services/events";
import heroImage from "../assets/theatre-seats.jpg";
import Event from "../components/Event";
import SocialLinks from "../components/SocialLinks";
import { Link } from "react-router-dom";

function Events() {
  return (
    <div className="events-div">
      <img
        className="events-hero-image"
        src={heroImage}
        alt="background-image"
      />
      <h1>הופעות קרובות</h1>
      <Link className="back-home-btn" to="/">
        חזרה לעמוד הבית
      </Link>
      <ul className="events-container">
        {events.map((event) => (
          <Event event={event} key={event.name} />
        ))}
      </ul>
      <SocialLinks />
    </div>
  );
}

export default Events;
