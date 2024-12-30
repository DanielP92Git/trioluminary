import { useState } from "react";
import photo1 from "../assets/gallery/URI_BAREKET_5.jpg";
import photo7a from "../assets/gallery/URI_BAREKET_7a.jpg";
import photo11 from "../assets/gallery/URI_BAREKET_11.jpg";
import photo14 from "../assets/gallery/URI_BAREKET_14.jpg";
import photo17 from "../assets/gallery/URI_BAREKET_17.jpg";
import photo22 from "../assets/gallery/URI_BAREKET_22.jpg";
import photo23 from "../assets/gallery/URI_BAREKET_23.jpg";
import photo33 from "../assets/gallery/URI_BAREKET_33.jpg";
import photo36 from "../assets/gallery/URI_BAREKET_36.jpg";
import photo38 from "../assets/gallery/URI_BAREKET_38.jpg";
import photo49 from "../assets/gallery/URI_BAREKET_49.jpg";
import photo56 from "../assets/gallery/URI_BAREKET_56.jpg";
import photo58 from "../assets/gallery/URI_BAREKET_58.jpg";

const gallery = [
  photo1,
  photo7a,
  photo14,
  photo17,
  photo22,
  photo23,
  photo33,
  photo49,
  photo38,
  photo36,
  photo11,
  photo56,
  photo58,
];

function Photos() {
  const [modal, setModal] = useState("");

  function openModal(photo) {
    if (!photo) return;
    console.log(photo);
    setModal(photo);
  }
  return (
    <>
      {modal && (
        <div className="modal" onClick={() => setModal("")}>
          <img src={modal} alt="" />
        </div>
      )}
      <ul className="gallery-container">
        {gallery.map((photo, index) => (
          <li key={index}>
            <img
              src={photo}
              className="gallery-item"
              alt=""
              loading="lazy"
              onClick={(e) => openModal(e.target.src)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Photos;
