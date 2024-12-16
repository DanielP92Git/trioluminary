import facebookSVG from "../assets/square-facebook-brands-solid.svg";
import youtubeSVG from "../assets/youtube-brands-solid.svg";
import instagramSVG from "../assets/instagram.svg";

function SocialLinks() {
  return (
    <div className="icons-container">
      <a
        href="https://www.facebook.com/profile.php?id=61565052085059"
        className="facebook-icon-btn"
        target="_blank"
        rel="noreferrer"
      >
        <img src={facebookSVG} alt="facebook-svg" className="facebook-icon" />
      </a>
      <a
        href="https://www.youtube.com/@LuminaryTrio-w6p"
        className="youtube-icon-btn"
        target="_blank"
        rel="noreferrer"
      >
        <img src={youtubeSVG} alt="youtube-svg" className="youtube-icon" />
      </a>
      <a
        href="https://www.instagram.com/luminary_trio/"
        className="instagram-icon-btn"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagramSVG} alt="youtube-svg" className="instagram-icon" />
      </a>
    </div>
  );
}

export default SocialLinks;
