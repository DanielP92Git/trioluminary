/* eslint-disable react/prop-types */
import logo from "../assets/Luminary (3).png";

function Header({ chosen }) {
  return (
    <>
      {chosen.name ? null : (
        <div className="logo-div">
          <img src={logo} alt="logo" className="logo" />
          <p>Luminary Trio</p>
        </div>
      )}
    </>
  );
}

export default Header;
