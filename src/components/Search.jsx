import React from "react";

const Search = ({ city, setCity, handleSubmit, icons }) => {
  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search city"
          value={city}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <div className="icons">
        {icons.map((icon, index) => (
          <img key={index} src={icon.img} alt={icon.type} />
        ))}
      </div>
    </div>
  );
};

export default Search;
