/* eslint-disable react/prop-types */
function ArtistButton({
  artist,
  onSetChosen,
  onHandleBackground,
  handleClickedArtist,
  onSetShowList
}) {
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
          onClick={(e) => {handleSetChosen(e)
            onSetShowList(false)
          }}
          className="artist-btn"
        >
          {artist.name} <br /> {`(${artist.instrument})`}
        </button>
      </a>
    </li>
  );
}

export default ArtistButton;
