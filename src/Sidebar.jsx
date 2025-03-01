import React, {useState, useEffect} from 'react'
import axios from "axios";
import "./Sidebar.css";

function Sidebar() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);  
  
   // Fetch news data when the component mounts
   useEffect(() => {console.log(process.env.REACT_APP_API_KEY);
   
    const fetchNews = async () => {
      const apiKey = "pub_66070ff278a43d4ad0d8c3c56e22e1880789e";
      const url = `${process.env.REACT_APP_API_KEY}&language=en&category=top`;
      const params = {
        apikey: apiKey,
        q: "technology", // Keyword to search for news
        country: "in", // Filter by country (India)
        language: "en", // Language (English)
        category: "top", // News category
      };
      try {
        const response = await axios.get(url, { params });
        console.log("API Response:", response.data); // Log response for debugging

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

  return (
    <div className="container my-5">
      <h1 className="mb-4">Top Headlines</h1>
      {loading && <p>Loading news...</p>}
      {error && <p className="text-danger">{error}</p>}
      {!loading &&
        !error &&
        news.map((article, index) => (
          <div key={index} className="mb-4">
            <div class="news-card1 card">
            <div class="card-body1">
            <h3 class="card-title1">{article.title || "Untitled"}</h3>
            {/* <p class="card-text">{article.description || "No description available."}</p> */}
            {article.link && (
              <a href={article.link} class="btn btn-primary1" target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            )}
            </div>
            </div>
          </div>
        ))}
        </div>
  )
}

export default Sidebar
