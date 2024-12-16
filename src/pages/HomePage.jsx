import { useEffect, useState } from "react";
import Header from "../components/Header";
import MainDescription from "../components/MainDescription";
import Sidebar from "../components/Sidebar";
import SocialLinksMobile from "../components/SocialLinksMobile";
import mainBackground from "../assets/piano-background.jpg";
import danielsImageMobile from "../assets/daniel-mobile.jpg";
import tomersImageMobile from "../assets/tomer-b&w-mobile.jpg";
import shirsImageMobile from "../assets/shir-mobile.jpg";
import mainBackgroundMobile from "../assets/piano-backgroundMobile.jpg";
import danielsImage from "../assets/daniel.jpg";
import tomersImage from "../assets/tomer-b&w.jpg";
import shirsImage from "../assets/shir.jpg";

const artistsData = [
  {
    name: "תומר עמיקם",
    instrument: "קלרינט באס",
    description: `תומר הוא נגן קלרינט וקלרינט באס, לשעבר נגן קלרינט שני וקלרינט באס בתזמורת הסימפונית חיפה. ניגן כנגן פרילאנס עם מיטב התזמורות בארץ ביניהם, התזמורת הסימפונית ירושלים, סינפונייטה באר שבע, תזמורת הרחוב הירושלמית, סימפונט רעננה ועוד... כמו כן אינו מגביל את עצמו רק לתחום הקלאסי וניגן גם במחזות זמר (תאטרון באר שבע ותאטרון האינקובטור) במוסיקה לסרטים ואף בהרכבים שונים בין השאר השתתף גם בהקלטות והוצאה לאור של 2 דיסקים וסיבובי הופעות בארץ ובחו"ל.`,
    image: tomersImage,
  },
  {
    name: "שיר טייב",
    instrument: "כינור",
    description: `כנרת, בוגרת תואר ראשון ושני במוסיקה מהאקדמיה למוסיקה ולמחול בירושלים, מכיתתו של פרופ ליחי בן דיין. חברה מייסדת של טריו לומינרי.  שיר היא חברה קבועה בתזמורת הרחוב הירושלמית כנגנית כינור ומובילת סקציית כינור שני ומתאמת הנגנים של התזמורת ב-9 השנים האחרונות, חברה מייסדת בעמותת "תזמורת הרחוב הירושלמית". השתתפה בפרויקטים שונים עם תזמורות בישראל ביניהן התזמורת הסימפונית ירושלים, תזמורת המהפכה, סימפונט רעננה ועוד. במהלך שנות לימודיה הוזמנה להשתתף בכיתות אמן בינלאומיות בישראל ובאירופה, ולקחה חלק במשלחות של מוסיקאים ישראלים לארה"ב ואירופה. נוסף על עבודתה כמוסיקאית פעילה, שיר היא ראש המשרד לענייני סטודנטים באקדמיה למוסיקה ולמחול בירושלים.`,
    image: shirsImage,
  },
  {
    name: "דניאל פגיס",
    instrument: "פסנתר",
    description: `פסנתרן ומורה לפסנתר, בעל תואר ראשון ושני במוסיקה מהאקדמיה למוסיקה ולמחול בירושלים, שם למד בכיתתם של ד"ר דמיטרי נובגורודסקי ופרופ' מיכאל בוגוסלבסקי. במהלך הקריירה שלו, דניאל ניגן עם מגוון רחב של נגנים והרכבים, וליווה נגנים באודיציות וברסיטלים. הוא השתתף בכיתות אמן ופסטיבלים מגוונים, בהם פסטיבל "צלילים במדבר" בשדה בוקר, שם ביצע יצירות מקוריות של מלחינים ישראלים, וכן בפסטיבל "פסנתר רחוב" – יוזמה של תזמורת הרחוב הירושלמית. בנוסף לעיסוקו כמבצע, דניאל עוסק בהוראת פסנתר ומקדיש חלק ניכר מזמנו לחינוך המוזיקלי.`,
    image: danielsImage,
  },
];

function HomePage() {
  const [chosen, setChosen] = useState({});
  const [showDesc, setShowDesc] = useState(true);
  const [showArtistsList, setShowArtistsList] = useState(false);

  // Set up your state for the background image
  const [isMobile, setIsMobile] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(() =>
    isMobile ? mainBackgroundMobile : mainBackground
  );

  const setInitialBackground = () => {
    // Check screen width and set background image accordingly
    if (window.innerWidth <= 768) {
      setBackgroundImage(mainBackgroundMobile); // Mobile version
    } else {
      setBackgroundImage(mainBackground); // Desktop version
    }
  };

  useEffect(() => {
    const updateDeviceType = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial device type check
    updateDeviceType();

    setInitialBackground();

    // Listen for window resize events
    window.addEventListener("resize", updateDeviceType);
    return () => {
      window.removeEventListener("resize", updateDeviceType);
    };
  }, []);
  useEffect(() => {
    const bodyEl = document.querySelector(".page-background");
    // const bodyEl = document.querySelector;

    // Temporarily remove the fade-in class to trigger the fade effect
    bodyEl.classList.remove("slide-effect");

    // Force reflow (i.e., restart the animation) by triggering a reflow
    // This is a trick to reset the transition so that the fade effect occurs when the background changes
    // eslint-disable-next-line no-unused-expressions
    bodyEl.offsetHeight; // Reading this property forces the reflow

    // Set the background image and trigger fade-in effect
    bodyEl.style.backgroundImage = `url(${backgroundImage})`;

    // After setting the background, add the fade-in class to trigger the fade effect
    bodyEl.classList.add("slide-effect");
  }, [backgroundImage]);

  // Logic to update background based on the chosen name
  function handleBackgroundChange(name) {
    let newBackground = mainBackground; // default image
    let newBackgroundMobile = mainBackgroundMobile;

    if (name === undefined) {
      newBackground = mainBackground;
      newBackgroundMobile = mainBackgroundMobile;
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
    setBackgroundImage(mainBackground);
    setChosen({});
    setShowArtistsList(false);
  }

  return (
    <main className="main">
      <div className="page-background"></div>
      <Header chosen={chosen} />

      <div className="section-two">
        <MainDescription showDesc={showDesc} chosen={chosen} />
        <Sidebar
          onSetChosen={handleChosen}
          onSetAbout={handleAbout}
          showDesc={showDesc}
          showList={showArtistsList}
          onSetShowList={setShowArtistsList}
          onHandleBackground={handleBackgroundChange}
          artistsData={artistsData}
        />
      </div>
      {isMobile && <SocialLinksMobile />}
    </main>
  );
}

export default HomePage;
