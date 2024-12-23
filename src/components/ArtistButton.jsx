/* eslint-disable react/prop-types */
function ArtistButton({
  artist,
  onSetChosen,
  onHandleBackground,
  handleClickedArtist,
}) {
  function handleSetChosen(e) {
    const clickedArtist = e.target.value;

    onSetChosen(clickedArtist);
    onHandleBackground(clickedArtist);
    handleClickedArtist();
  }

  return (
    <li>
      <button
        value={artist.name}
        onClick={(e) => handleSetChosen(e)}
        className="artist-btn"
      >
        {artist.name} <br /> {`(${artist.instrument})`}
      </button>
    </li>
  );
}

export default ArtistButton;
