import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(
        "https://api.spacexdata.com/v4/launches/"
      );
      setResults(data);
      console.log(data);
    };
    search();
  }, []);

  const output = results.map((result) => {
    let launchYear = new Date(result.date_utc).getFullYear().toString();
    return (
      <div key={result.id} className="launches">
        <img src={result.links.patch.small} className="launchImg" />
        <div className="launchDesc">
          <div>
            <h3>
              Flight Number {result.flight_number} : {result.name} ({launchYear})
            </h3>
          </div>
          <div className="details">
            <p>Details: {result.details}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter keywords"
          className="search--bar"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
        ></input>
        <div className="launchList">{output}</div>
      </div>
    </>
  );
};

export default Search;
