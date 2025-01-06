/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import danielsImageMobile from "../assets/daniel-mobile.jpg";
import tomersImageMobile from "../assets/tomer-mobile.jpg";
import shirsImageMobile from "../assets/shir-mobile.jpg";
import danielsImage from "../assets/daniel.jpg";
import tomersImage from "../assets/tomer.webp";
import shirsImage from "../assets/shir.jpg";
import i18next from "i18next";
import cookies from "js-cookie";

import { AppContext } from "./AppContextFile";

export const AppProvider = ({ children }) => {
  const [chosen, setChosen] = useState({});
  const [showArtistsList, setShowArtistsList] = useState(false);
  const [barsClicked, setBarsClicked] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [languages, setLanguages] = useState([]);
  const [showDesc, setShowDesc] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const artistsData = [
    {
      name: "תומר עמיקם",
      instrument: "קלרינט באס",
      description: `תומר הוא נגן קלרינט וקלרינט באס, לשעבר נגן קלרינט שני וקלרינט באס בתזמורת הסימפונית חיפה. ניגן כנגן פרילאנס עם מיטב התזמורות בארץ ביניהם, התזמורת הסימפונית ירושלים, סינפונייטה באר שבע, תזמורת הרחוב הירושלמית, סימפונט רעננה ועוד... כמו כן אינו מגביל את עצמו רק לתחום הקלאסי וניגן גם במחזות זמר (תאטרון באר שבע ותאטרון האינקובטור) במוסיקה לסרטים ואף בהרכבים שונים בין השאר השתתף גם בהקלטות והוצאה לאור של 2 דיסקים וסיבובי הופעות בארץ ובחו"ל.`,
      image: tomersImage,
      key: "tomerAmikam",
    },
    {
      name: "שיר טייב",
      instrument: "כינור",
      description: `כנרת, בוגרת תואר ראשון ושני במוסיקה מהאקדמיה למוסיקה ולמחול בירושלים, מכיתתו של פרופ ליחי בן דיין. חברה מייסדת של טריו לומינרי.  שיר היא חברה קבועה בתזמורת הרחוב הירושלמית כנגנית כינור ומובילת סקציית כינור שני ומתאמת הנגנים של התזמורת ב-9 השנים האחרונות, חברה מייסדת בעמותת "תזמורת הרחוב הירושלמית". השתתפה בפרויקטים שונים עם תזמורות בישראל ביניהן התזמורת הסימפונית ירושלים, תזמורת המהפכה, סימפונט רעננה ועוד. במהלך שנות לימודיה הוזמנה להשתתף בכיתות אמן בינלאומיות בישראל ובאירופה, ולקחה חלק במשלחות של מוסיקאים ישראלים לארה"ב ואירופה. נוסף על עבודתה כמוסיקאית פעילה, שיר היא ראש המשרד לענייני סטודנטים באקדמיה למוסיקה ולמחול בירושלים.`,
      image: shirsImage,
      key: "shirTayeb",
    },
    {
      name: "דניאל פגיס",
      instrument: "פסנתר",
      description: `פסנתרן ומורה לפסנתר, בעל תואר ראשון ושני במוסיקה מהאקדמיה למוסיקה ולמחול בירושלים, שם למד בכיתתם של ד"ר דמיטרי נובגורודסקי ופרופ' מיכאל בוגוסלבסקי. במהלך הקריירה שלו, דניאל ניגן עם מגוון רחב של נגנים והרכבים, וליווה נגנים באודיציות וברסיטלים. הוא השתתף בכיתות אמן ופסטיבלים מגוונים, בהם פסטיבל "צלילים במדבר" בשדה בוקר, שם ביצע יצירות מקוריות של מלחינים ישראלים, וכן בפסטיבל "פסנתר רחוב" – יוזמה של תזמורת הרחוב הירושלמית. בנוסף לעיסוקו כמבצע, דניאל עוסק בהוראת פסנתר ומקדיש חלק ניכר מזמנו לחינוך המוזיקלי.`,
      image: danielsImage,
      key: "danielPagis",
    },
  ];

  const languagesData = [
    { code: "he", nativeName: "עברית", country_code: "il", dir: "rtl" },
    { code: "en", nativeName: "English", country_code: "us", dir: "ltr" },
  ];

  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const code = cookies.get("i18next") || "he";
    return languagesData.find((l) => l.code === code);
  });

  function handleBackgroundChange(name) {
    let newBackground = ""; // default image
    let newBackgroundMobile = "";

    if (name === undefined) {
      newBackground = "";
      newBackgroundMobile = "";
    }
    if (name === "תומר עמיקם") {
      newBackground = tomersImage;
      newBackgroundMobile = tomersImageMobile;
    }
    if (name === "דניאל פגיס") {
      newBackground = danielsImage;
      newBackgroundMobile = danielsImageMobile;
    }
    if (name === "שיר טייב") {
      newBackground = shirsImage;
      newBackgroundMobile = shirsImageMobile;
    }

    // Check if the user is on mobile (screen width < 768px)
    if (isMobile) {
      setBackgroundImage(newBackgroundMobile);
    } else {
      setBackgroundImage(newBackground);
    }
  }

  function handleChosen(artist) {
    setShowDesc(false);
    setChosen(artistsData.find((art) => art.name === artist));
  }

  function handleAbout() {
    setShowDesc(true);
    setBackgroundImage("");
    setChosen({});
    setShowArtistsList(false);
  }

  const handleLanguageChange = (code) => {
    const newLanguage = languagesData.find((l) => l.code === code);
    cookies.set("i18next", code); // Update the cookie
    i18next.changeLanguage(code);
    setCurrentLanguage(newLanguage); // Update the React state
  };

  // Set the background image based on the chosen artist
  useEffect(() => {
    const bodyEl = document.querySelector(".main-section");

    // Temporarily remove the fade-in class to trigger the fade effect
    bodyEl.classList.remove("slide-effect");

    // Trigger reflow
    bodyEl.offsetHeight; // Reading this property forces the reflow

    // Set the background image and trigger fade-in effect
    bodyEl.style.backgroundImage = `url(${backgroundImage})`;

    // After setting the background, add the fade-in class to trigger the fade effect
    bodyEl.classList.add("slide-effect");
  }, [backgroundImage]);

  // Set the direction of the page based on the current language
  useEffect(() => {
    document.body.dir = currentLanguage.dir;
  }, [currentLanguage]);

  // Update device type
  useEffect(() => {
    const updateDeviceType = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial device type check
    updateDeviceType();

    // setInitialBackground();

    // Listen for window resize events
    window.addEventListener("resize", updateDeviceType);
    return () => {
      window.removeEventListener("resize", updateDeviceType);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        chosen,
        setChosen,
        showArtistsList,
        setShowArtistsList,
        barsClicked,
        setBarsClicked,
        backgroundImage,
        setBackgroundImage,
        isMobile,
        setIsMobile,
        languages,
        setLanguages,
        showDesc,
        setShowDesc,
        showForm,
        setShowForm,
        artistsData,
        languagesData,
        handleBackgroundChange,
        handleChosen,
        handleAbout,
        handleLanguageChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
