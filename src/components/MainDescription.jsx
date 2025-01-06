import { useState } from "react";
import ContactForm from "./ContactForm";
import EmbedVideo from "./EmbedVideo";
import { useTranslation } from "react-i18next";

/* eslint-disable react/prop-types */
function MainDescription({ chosen, showDesc, showForm, setShowForm }) {
  const [submitMessage, setSubmitMessage] = useState("");
  const { t } = useTranslation();

  return (
    <div className="main-section" id="main-section">
      <div className="central-container">
        <div className="komunikat-container">
          {showDesc ? (
            <>
              <div className="trio-description">
                {t("about.aboutTrio")
                  .split("\n")
                  .map((line, index) =>
                    line.trim() !== "" ? (
                      <p key={index}>{line}</p>
                    ) : (
                      <br key={index} />
                    )
                  )}
              </div>

              <button
                className="cta-btn"
                onClick={() => {
                  setShowForm(true);
                }}
              >
                {t("buttons.cta")}
                {/* </a> */}
              </button>
              {submitMessage && (
                <p dir="rtl" className="submit-message">
                  {submitMessage}
                </p>
              )}
              {showForm && (
                <ContactForm
                  setShowForm={setShowForm}
                  setSubmitMessage={setSubmitMessage}
                />
              )}
            </>
          ) : (
            <div className="artist-container">
              <h2>{t(`about.aboutArtists.${chosen.key}.name`)}</h2>

              <p className="artists-description">
                {t(`about.aboutArtists.${chosen.key}.bio`)}
              </p>
              <img
                src={chosen.image}
                alt={`${chosen.name}-image`}
                className="artists-img"
              />
            </div>
          )}
        </div>
        <EmbedVideo
          srcUrl="https://www.youtube.com/embed/NlqZHSPSvzQ?rel=0"
          title="Winter - From A. Piazzolla&#39;s Four Seasons חורף - מתוך ארבעת העונות של א. פיאצולה"
          className="homepage-youtube-container"
        />
      </div>
    </div>
  );
}

export default MainDescription;
