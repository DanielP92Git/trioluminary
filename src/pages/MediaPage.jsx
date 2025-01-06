import { Link, Outlet } from "react-router";
import { useTranslation } from "react-i18next";

function MediaPage() {
  const { t } = useTranslation();
  return (
    <div className="media-page">
      <Link className="back-home-btn-gallery" to="/">
        {t("buttons.backHome")}
      </Link>
      <div className="media-nav">
        <Link className="media-button" to="/media/videos">
          {t("buttons.videos")}
        </Link>
        <Link className="media-button" to="/media/photos">
          {t("buttons.photos")}
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default MediaPage;
