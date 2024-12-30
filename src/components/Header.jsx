/* eslint-disable react/prop-types */
import logo from "../assets/Luminary (3).png";
import MenuButton from "./MenuButton";
import Navbar from "./Navbar";
function Header({
  setBarsClicked,
  barsClicked,
  onSetChosen,
  onSetAbout,
  showList,
  onSetShowList,
  onHandleBackground,
  artistsData,
  isMobile,
}) {
  return (
    <>
      <div className="homepage-hero">
        {isMobile && <img src={logo} alt="logo" className="logo" />}
        <Navbar
          setBarsClicked={setBarsClicked}
          barsClicked={barsClicked}
          onSetChosen={onSetChosen}
          onSetAbout={onSetAbout}
          showList={showList}
          onSetShowList={onSetShowList}
          onHandleBackground={onHandleBackground}
          artistsData={artistsData}
        />
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
