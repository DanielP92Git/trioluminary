/* eslint-disable react/prop-types */
function MainDescription({ showDesc, chosen }) {
  // const bodyEl = document.getElementById("body");
  // const komunikat = document.querySelector('.komunikat-container')
  // if (!chosen.name) bodyEl.style.backgroundImage = `url(${mainBackground})`;

  // if (chosen.name === "תומר עמיקם") {
  //   bodyEl.style.backgroundImage = `url(${tomersImage})`;
  //   komunikat.classList.add("slide-effect");
  // }
  // if (chosen.name === "דניאל פגיס")
  //   bodyEl.style.backgroundImage = `url(${danielsImage})`;
  // if (chosen.name === "שיר טייב")
  //   bodyEl.style.backgroundImage = `url(${shirsImage})`;

  return (
    <div className="komunikat-container">
      {showDesc ? (
        <>
          <p dir="rtl" className="trio-description">
            טריו לומינרי הוא פרי יצירתם של שלושה מוסיקאים, בוגרי האקדמיה למוסיקה
            ולמחול בירושלים - דניאל פגיס (פסנתר), שיר טייב (כינור) ותומר עמיקם
            (קלרינט באס). <br></br> <br></br> השילוב הייחודי של פסנתר, כינור
            וקלרינט באס יוצר הרמוניה עשירה ועמוקה ונותן צבע ופרשנות ייחודית
            לרפרטואר קלאסי רחב . בין הרפרטואר של הטריו ניתן למצוא אבני חן ממיטב
            המלחינים מהמוסיקה הקלאסית, כגון: מוצארט, שוברט, פראנק, קלרה שומאן
            ועוד... <br></br> בנוסף, ההרכב משלב בקונצרטים שלו יצירות של מלחינים
            ישראלים ועיבודים לשירים אהובים כמו &quot;ירושלים של זהב&quot;, &quot;הורה היאחזות&quot;,
            ו&quot;כשאור דולק בחלונך&quot;. <br></br> <br></br> אנו מזמינים אתכם להצטרף
            אלינו למסע מוסיקלי מסקרן בין קלאסיקה עולמית בגוון אחר, לבין צלילים
            המהדהדים את הנפש הישראלית.
          </p>

          <button className="cta-btn">
            <a
              aria-label="Chat on WhatsApp"
              className="cta-link"
              href="https://m.me/luminarytrio"
            >
              להזמנת הופעות
            </a>
          </button>
        </>
      ) : (
        <div className="artist-container">
          <h2>{chosen.name}</h2>

          <p dir="rtl" className="artists-description">
            {chosen.description}
          </p>
          <img
            src={chosen.image}
            alt={`${chosen.name}-image`}
            className="artists-img"
          />
        </div>
      )}
    </div>
  );
}

export default MainDescription;
