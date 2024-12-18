/* eslint-disable react/prop-types */
import ArtistButton from "./ArtistButton";
import SocialLinks from "./SocialLinks";
import { Link } from "react-router-dom";

function Sidebar({
  onSetChosen,
  onSetAbout,
  showList,
  onSetShowList,
  onHandleBackground,
  artistsData,
}) {
  return (
    <div className="sidebar">
      {showList && (
        <button className="about-trio-btn" onClick={onSetAbout}>
          אודות הטריו
        </button>
      )}
      {!showList && (
        <button
          className="about-artists-btn"
          onClick={() => onSetShowList(true)}
        >
          אודות הנגנים
        </button>
      )}
      {showList && (
        <ul>
          {artistsData.map((artist) => (
            <ArtistButton
              key={artist.name}
              artist={artist}
              onSetChosen={onSetChosen}
              onHandleBackground={onHandleBackground}
            />
          ))}
        </ul>
      )}
      <Link className="coming-up-btn" to="/events">להופעות הקרובות</Link>
      <SocialLinks />
    </div>
  );
}

export default Sidebar;
