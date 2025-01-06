/* eslint-disable react/prop-types */
import ArtistButton from "./ArtistButton";
import SocialLinks from "./SocialLinks";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContextFile";

function Navbar() {
  const {
    setBarsClicked,
    barsClicked,
    handleChosen,
    handleAbout,
    showArtistsList,
    setShowArtistsList,
    handleBackgroundChange,
    artistsData,
    languages,
    setLanguages,
  } = useContext(AppContext);

  const { t } = useTranslation();

  function handleClickedArtist() {
    setBarsClicked(false);
  }

  return (
    <div className={`navbar ${barsClicked ? "navbar-show" : ""}`}>
      <LanguageSwitcher languages={languages} onSetLanguages={setLanguages} />
      <a
        href="#main-section"
        className="about-trio-btn"
        onClick={() => {
          handleAbout();
          handleClickedArtist();
        }}
      >
        {t("navbar.aboutTrio")}
      </a>
      <div
        className="about-artists-btn-container"
        onClick={() => setShowArtistsList(!showArtistsList)}
      >
        <button className="about-artists-btn">
          {t("navbar.aboutArtists")}
        </button>
        {showArtistsList && (
          <ul className="submenu">
            {artistsData.map((artist) => (
              <ArtistButton
                key={artist.name}
                artist={artist}
                onSetShowList={setShowArtistsList}
                onSetChosen={handleChosen}
                onHandleBackground={handleBackgroundChange}
                handleClickedArtist={handleClickedArtist}
              />
            ))}
          </ul>
        )}
      </div>
      <Link className="coming-up-btn" to="/events">
        {t("navbar.comingUp")}
      </Link>

      <Link className="coming-up-btn" to="/media/photos">
        {t("navbar.media")}
      </Link>
      <SocialLinks />
      <p>Luminary Trio</p>
    </div>
  );
}

export default Navbar;
