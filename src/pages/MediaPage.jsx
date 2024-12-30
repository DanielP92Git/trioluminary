import { Link, Outlet } from "react-router";

function MediaPage() {
  return (
    <div className="media-page">
      <Link className="back-home-btn-gallery" to="/">
        חזרה לעמוד הבית
      </Link>
      <div className="media-nav">
        <Link className="media-button" to="/media/videos">
          וידיאו
        </Link>
        <Link className="media-button" to="/media/photos">
          תמונות
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default MediaPage;
