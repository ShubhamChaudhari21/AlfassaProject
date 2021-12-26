import "./Homepage.css";
import SearchSection from "./SearchSection";
import BodySection from "./BodySection";

function Homepage() {
  return (
    <div>
      <div className="titleBar d-flex">
        <div className="titleText">AlfaSearch</div>
        <div className="rightMenu d-flex align-items-center pr-2">
          <i class="material-icons hamburger">menu</i>
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
    </div>
  );
}

export default Homepage;
