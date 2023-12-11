import React, { useState } from "react";

const PortfolioMenu = ({ onFilterChange }) => {
  const [searchTitle, setSearchTitle] = useState("");
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [sortBy, setSortBy] = useState("");

  const handleInputChange = (e) => {
    setSearchTitle(e.target.value);
  };

  const handleApply = () => {
    onFilterChange(
      searchTitle,
      selectedTechnologies,
      minPrice,
      maxPrice,
      sortBy
    );
  };

  const handleReset = () => {
    setSearchTitle("");
    setSelectedTechnologies([]);
    setMinPrice(0);
    setMaxPrice(100);
    setSortBy("");
    onFilterChange("", [], 0, 100, "");
  };

  const technologiesList = [
    "HTML",
    "CSS",
    "Bootstrap",
    "Javascript",
    "PHP",
    "ReactJS",
    "Python",
    "Plotly",
  ];

  const handleTechnologyChange = (e) => {
    const selectTech = e.target.value;
    if (selectedTechnologies.includes(selectTech)) {
      setSelectedTechnologies(
        selectedTechnologies.filter((tech) => tech !== selectTech)
      );
    } else {
      setSelectedTechnologies([...selectedTechnologies, selectTech]);
    }
  };

  return (
    <div className="portfolio-menu mt-2">
      <div>
        <label className="fw-bold">Title:</label>
        <input
          type="text"
          name="title"
          placeholder="Filter by title"
          value={searchTitle}
          onChange={handleInputChange}
        />
        <hr />
        <div className="technologies">
          <label className="fw-bold">Technologies:</label> <br />
          {technologiesList.map((tech) => (
            <React.Fragment key={tech}>
              <input
                type="checkbox"
                name="technologies"
                value={tech}
                checked={selectedTechnologies.includes(tech)}
                onChange={handleTechnologyChange}
              />
              <label>{tech}</label> <br />
            </React.Fragment>
          ))}
        </div>
        <hr />
        <label className="fw-bold">Price Range:</label>
        <div className="price-range">
          <input
            type="number"
            name="minPrice"
            placeholder="min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <span>-</span>
          <input
            type="number"
            name="maxPrice"
            placeholder="max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>
      <hr />
      <div>
        <label className="fw-bold">Sort By:</label>
        <select
          name="sortBy"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}>
          <option value="">--Select--</option>
          <option value="lowToHigh">Low to high</option>
          <option value="highToLow">High to low</option>
        </select>
      </div>
      <div className="buttons">
        <button onClick={handleApply}>Apply</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default PortfolioMenu;
