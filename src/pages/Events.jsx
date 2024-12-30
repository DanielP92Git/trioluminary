/* eslint-disable react/prop-types */
import events from "../services/events";
import heroImage from "../assets/URI_BAREKET_24-resized.webp";
import Event from "../components/Event";
import SocialLinks from "../components/SocialLinks";
import arrowDown from "../assets/circle-chevron-down-solid.svg";
import { Link } from "react-router-dom";

function Events({ isMobile }) {
  return (
    <div className="events-div">
      <div className="hero-image-container">
        <img
          className="events-hero-image"
          src={heroImage}
          alt="background-image"
        />
        <h1>הופעות קרובות</h1>
        {!isMobile && (
          <a href="#events-container" className="arrow-container">
            <img src={arrowDown} alt="" className="arrow" />
          </a>
        )}
      </div>
      <Link className="back-home-btn" to="/">
        חזרה לעמוד הבית
      </Link>
      <ul className="events-container" id="events-container">
        {events.map((event) => (
          <Event event={event} key={event.name} />
        ))}
      </ul>
      <SocialLinks />
    </div>
  );
}

export default Events;
