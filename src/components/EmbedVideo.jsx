/* eslint-disable react/prop-types */
function EmbedVideo({ srcUrl, title, className }) {
  return (
    <div className={className}>
      <iframe
        width="640"
        height="360"
        src={srcUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        loading="lazy"
        allowFullScreen
        className="responsive-iframe"
      ></iframe>
    </div>
  );
}

export default EmbedVideo;
