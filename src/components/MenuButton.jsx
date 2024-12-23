/* eslint-disable react/prop-types */
import menuSvg from "../assets/bars-solid.svg";
import xSvg from "../assets/x-solid.svg";

function MenuButton({ barsClicked, setBarsClicked }) {
    
  return (
    <img
      className="menubars"
      onClick={() => setBarsClicked(!barsClicked)}
      src={!barsClicked ? `${menuSvg}` : `${xSvg}`}
      alt=""
    />
  );
}

export default MenuButton;
