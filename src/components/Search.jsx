import searchIcon from "../../src/images/Icon__search.svg";
export default function Search() {
  return (
    <div id="search-box">
      <a href="">
        <img src={searchIcon} alt="search-icon" />
      </a>
      <input type="text" placeholder="Search Items" />
    </div>
  );
}
