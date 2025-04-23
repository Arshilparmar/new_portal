import React, { useState, useEffect,} from "react";
import './Cricket.css';
import Layout from "./Layout";
import Features from "../Features";

const CricketScore = () => {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState("");
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      const response = await fetch("https://api.cricapi.com/v1/cricScore?apikey=e1e2465f-c87e-4fa4-980b-c465c82e562f");
      const result = await response.json();
      console.log(result);

      if (result.status === "success") {
        setData(result.data);
      } else {
        setData([]); 
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e) => {
    setInputData(e.target.value);
  };

  const handleBtn = () => {
    setSearch(inputData.toLowerCase());
  };

  return (
  <>
  <div>
    <Layout/>
  </div>
  <div>
    <Features/>
  </div>
    <div className="main-container">
      <div className="searchBar1">
        <input
          type="text"
          placeholder="Search Match, Series"
          value={inputData}
          onChange={handleInput}
        />
        <button onClick={handleBtn}>Search</button>
      </div>

      <div className="heading">
        <p>Live Score</p>
      </div>

      <div className="container1">
        {data.length > 0 ? (
          data
            .filter(
              (match) =>
                match.status !== "Match not started" &&
                (search === "" ||
                  match.series.toLowerCase().includes(search) ||
                  match.t1.toLowerCase().includes(search) ||
                  match.t2.toLowerCase().includes(search))
            )
            .map((match, index) => (
              <div className="card1" key={index}>
                <h3>{match.series}</h3>
                <h3>{match.matchType}</h3>
                <div className="img1">
                  <div>
                    <p>{match.t1}</p>
                    <p>{match.t1s || "N/A"}</p>
                  </div>
                  <div>
                    <p>{match.t2}</p>
                    <p>{match.t2s || "N/A"}</p>
                  </div>
                </div>
                <p className="status">Status: {match.status}</p>
              </div>
            ))
        ) : (
          <p>Loading....</p>
        )}
      </div>
    </div></>
  );
};

export default CricketScore;
