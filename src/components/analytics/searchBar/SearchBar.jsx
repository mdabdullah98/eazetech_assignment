import "./searchbar.css";

function SearchBar() {
  return (
    <form className="searcbar-form">
      <div className="input-group">
        <div className="w-full flex justify-between items-center ">
          <div className="flex">
            <figure className="leading-icon">
              <img src="./TextFeild/leading-icon.png" alt="leading-icon" />
            </figure>

            <div className="flex">
              <input
                type="text"
                placeholder="Search by profile , Setting , artifact etc..."
                id="searchbar-label"
              />
              <label htmlFor="searchbar-label">Search</label>
            </div>
          </div>

          <figure className="trailing-icon">
            <img src="./TextFeild/trailing-icon.png" alt="trailing-icon" />
          </figure>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
