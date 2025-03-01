import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from './Layout';
import Features from '../Features';
import './Politics.css';

const Entertainment = () => {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = "pub_66070ff278a43d4ad0d8c3c56e22e1880789e";
      const url = `${process.env.REACT_APP_API_KEY}&q=live%20news&language=en&category=entertainment`;
      const params = {
        apikey: apiKey,
        q: "technology", // Keyword to search for news
        country: "in", // Filter by country (India)
        language: "en", // Language (English)
        category: "top", // News category
      };

      try {
        const response = await axios.get(url, { params });
        console.log("API Response:", response.data);

        // Set news data based on response structure
        if (response.data && response.data.results) {
          setNews(response.data.results); // 'results' is the key where articles are stored
        } else {
          throw new Error("Unexpected API response structure");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error.response || error.message || error);
        setError("Failed to fetch news: " + (error.response?.data?.message || error.message));
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (<>
    <div>
      <Layout></Layout>
    </div>
    <div>
      <Features></Features>
    </div>
    <div className="live5 my-5">
      <h1 className="p1"> Entertainment News</h1>
      {loading && <p className="p2">Loading news...</p>}
      {error && <p className="text-danger">{error}</p>}
      <div className="news-container">
        {!loading &&
          !error &&
          news.map((article, index) => (
            <div key={index} className="news-card">
              <img src={article.image_url || "default-image.jpg"} alt={article.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{article.title || "Untitled"}</h5>
                <p className="card-text">{article.description || "No description available."}</p>
                {article.link && (
                  <a href={article.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
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
}

export default Entertainment
