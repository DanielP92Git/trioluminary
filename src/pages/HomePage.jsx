/* eslint-disable react/prop-types */
import { useContext } from "react";
import Header from "../components/Header";
import MainDescription from "../components/MainDescription";
import SocialLinksMobile from "../components/SocialLinksMobile";
import { AppContext } from "../contexts/AppContextFile";

function HomePage() {
  const { isMobile, chosen, showDesc, setShowForm, showForm } =
    useContext(AppContext);

  return (
    <main>
      <Header />

      <MainDescription
        chosen={chosen}
        showDesc={showDesc}
        setShowForm={setShowForm}
        showForm={showForm}
      />
      {isMobile && <SocialLinksMobile />}
    </main>
  );
}

export default HomePage;
