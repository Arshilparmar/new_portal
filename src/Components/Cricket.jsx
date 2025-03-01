import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./Layout";
import Features from "../Features";
import "./Politics.css";

const Cricket = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [news, setNews] = useState([]); // Assuming API returns an array

  useEffect(() => {
    const fetchCommentary = async () => {
      setLoading(true);
      setError(null);

      try {
        const options = {
          method: "GET",
          url: "https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/41881/comm",
          headers: {
            "x-rapidapi-key": "79fb25031bmsh5a023d8ac0b8be3p152919jsn33bb4cd14c8a", // Use REACT_APP_ prefix for environment variables in React
            "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
          },
        };

        const response = await axios.request(options);
        console.log(response.data);
        setNews(response.data.commentaryList || []); // Adjust based on API response
      } catch (error) {
        setError(error.response?.data?.message || "Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchCommentary();
  }, []); // Runs only on component mount

  return (
    <>
      <div>
        <Layout />
      </div>
      <div>
        <Features />
      </div>
      <div className="live5 my-5">
        <h1 className="p1">Cricket News</h1>
        {loading && <p className="p2">Loading news...</p>}
        {error && <p className="text-danger">{error}</p>}
        <div className="news-container">
          {!loading &&
            !error &&
            news.map((article, index) => (
              <div key={index} className="news-card">
                <img
                  src={article.image_url || "default-image.jpg"}
                  alt={article.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{article.title || "Untitled"}</h5>
                  <p className="card-text">
                    {article.description || "No description available."}
                  </p>
                  {article.link && (
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Read more
                    </a>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Cricket;
