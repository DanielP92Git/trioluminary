/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContextFile";
import "flag-icon-css/css/flag-icons.min.css";

function LanguageSwitcher() {
  const { handleLanguageChange, languagesData } = useContext(AppContext);

  const { i18n } = useTranslation();

  return (
    <div className="dropdown">
      <span
        className={`flag-icon flag-icon-${
          i18n.resolvedLanguage === "he" ? "il" : "us"
        }`}
      ></span>
      <ul className="dropdown-menu">
        {languagesData.map(({ code, country_code }) => (
          <li
            className="dropdown-item"
            key={code}
            onClick={() => handleLanguageChange(code)}
          >
            <span className={`flag-icon flag-icon-${country_code}`}></span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LanguageSwitcher;
