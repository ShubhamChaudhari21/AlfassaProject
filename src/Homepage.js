import "./Homepage.css";
import SearchSection from "./SearchSection";

function Homepage() {
  return (
    <div>
      <div className="titleBar">
        <div className="titleText">AlfaSearch</div>
      </div>
      <div className="searchSection">
        <SearchSection />
      </div>
    </div>
  );
}

export default Homepage;
