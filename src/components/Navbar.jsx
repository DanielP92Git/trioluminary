/* eslint-disable react/prop-types */
import ArtistButton from "./ArtistButton";
import SocialLinks from "./SocialLinks";
import { Link } from "react-router-dom";
// import logo from "../assets/Luminary (3).png";

function Navbar({
  setBarsClicked,
  barsClicked,
  onSetChosen,
  onSetAbout,
  showList,
  onSetShowList,
  onHandleBackground,
  artistsData,
}) {
  function handleClickedArtist() {
    setBarsClicked(false);
  }

  return (
    <div className={`navbar ${barsClicked ? "navbar-show" : ""}`}>

        <a
        href="#main-section"
          className="about-trio-btn"
          onClick={() => {
            onSetAbout();
            handleClickedArtist();
          }}
        >
          אודות הטריו
        </a>
      <a className="about-artists-btn-container" onClick={() => onSetShowList(!showList)}>
   
          <button
            className="about-artists-btn"
            
          >
            אודות הנגנים
          </button>
        {showList && (
          <ul className="submenu">
            {artistsData.map((artist) => (
              <ArtistButton
                key={artist.name}
                artist={artist}
                onSetShowList={onSetShowList}
                onSetChosen={onSetChosen}
                onHandleBackground={onHandleBackground}
                handleClickedArtist={handleClickedArtist}
              />
            ))}
          </ul>
        )}
      </a>
      <Link className="coming-up-btn" to="/events">
        להופעות הקרובות
      </Link>

      <Link className="coming-up-btn" to='/media/photos'>מדיה</Link>
      <SocialLinks />
      <p>Luminary Trio</p>
    </div>
  );
}

export default Navbar;
