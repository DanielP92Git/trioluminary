/* eslint-disable react/prop-types */
import logo from "../assets/Luminary (3).png";
import MenuButton from "./MenuButton";
import Navbar from "./Navbar";
import { AppContext } from "../contexts/AppContextFile";
import { useContext } from "react";

function Header() {
  const { barsClicked, setBarsClicked, isMobile } = useContext(AppContext);

  return (
    <>
      <div className="homepage-hero">
        {isMobile && <img src={logo} alt="logo" className="logo" />}
        <Navbar />
        {isMobile && (
          <MenuButton
            barsClicked={barsClicked}
            setBarsClicked={setBarsClicked}
          />
        )}
      </div>
    </>
  );
}

export default Header;
