import EmbedVideo from "./EmbedVideo";
function Videos() {
  return (
    <div className="videos-container">
      <EmbedVideo
        className="video-item"
        srcUrl="https://www.youtube.com/embed/RaEula6CjUQ"
        title="Spring - From A. Piazzolla&#39;s Four Seasons - אביב מתוך ארבע העונות של א. פיאצולה"
      />
      <EmbedVideo
        className="video-item"
        srcUrl="https://www.youtube.com/embed/NlqZHSPSvzQ?rel=0"
        title="Winter - From A. Piazzolla&#39;s Four Seasons חורף - מתוך ארבעת העונות של א. פיאצולה"
      />
      <EmbedVideo
        className="video-item"
        srcUrl="https://www.youtube.com/embed/J6a1ze768mQ"
        title="Jerusalem of Gold ירושלים של זהב"
      />
    </div>
  );
}

export default Videos;
