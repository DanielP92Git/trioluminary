/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
function ArtistButton({
  artist,
  onSetChosen,
  onHandleBackground,
  handleClickedArtist,
  onSetShowList,
}) {
  const { t } = useTranslation();
  function handleSetChosen(e) {
    const clickedArtist = e.target.value;

    onSetChosen(clickedArtist);
    onHandleBackground(clickedArtist);
    handleClickedArtist();
  }

  return (
    <li>
      <a href="#main-section">
        <button
          value={artist.name}
          onClick={(e) => {
            handleSetChosen(e);
            onSetShowList(false);
          }}
          className="artist-btn"
        >
          {t(`about.aboutArtists.${artist.key}.name`)} <br />{" "}
          {`(${t(`about.aboutArtists.${artist.key}.instrument`)})`}
        </button>
      </a>
    </li>
  );
}

export default ArtistButton;
