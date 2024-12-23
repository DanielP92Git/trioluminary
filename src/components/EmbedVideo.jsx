function EmbedVideo() {
  return (
    <div className="homepage-youtube-container">
      <iframe
        width="640"
        height="360"
        src="https://www.youtube.com/embed/NlqZHSPSvzQ?rel=0"
        title="Winter - From A. Piazzolla&#39;s Four Seasons חורף - מתוך ארבעת העונות של א. פיאצולה"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        loading="lazy"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          margin: "auto",
          width: "100%",
          height: "100%",
          border: "none",
        }}
      ></iframe>
    </div>
  );
}

export default EmbedVideo;
