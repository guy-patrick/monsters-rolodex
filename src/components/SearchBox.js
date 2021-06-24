export const SearchBox = ({ handleInput }) => (
  <input
    type="search"
    className="search"
    placeholder="Enter monster name"
    onChange={handleInput}
  />
);
