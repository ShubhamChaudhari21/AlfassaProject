import "../Styles/Homepage.css";
import SearchSection from "./SearchSection";
import BodySection from "./BodySection";
import Footer from "./Footer";

function Homepage() {
  return (
    <div className="Hompage d-flex flex-column">
      <div className="titleBar d-flex">
        <div className="titleText">AlfaSearch</div>
        <div className="rightMenu d-flex align-items-center pr-2">
          <i className="material-icons hamburger">menu</i>
          <p className="mb-0 desktop-rightMenu">Engines</p>
          <i className="material-icons desktop-rightMenu">arrow_drop_down</i>
          <i className="material-icons desktop-rightMenu px-4">translate</i>
        </div>
      </div>
      <div className="searchSection">
        <SearchSection />
      </div>
      <div className="BodySection">
        <BodySection />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
