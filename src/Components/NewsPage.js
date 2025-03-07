import React, { useContext, useEffect } from "react";
import NewsContext from "../Context/NewsContext";
import "./NewsPage.css"; // Import the CSS file
import Layout from "./Layout";
import Features from "../Features";
import Sidebar from "../Sidebar";

export default function NewsPage() {
  const { news, searched } = useContext(NewsContext);
  
  useEffect(() => {
    console.log("News Data:", news);
  }, [news]);

  return (<>
    <div>
      <Layout/>
    </div>
    <div>
      <Features/>
    </div>
    <div className="right-content">
          <div className="sidebar">
            <Sidebar/>
          </div>
        </div>
    <div className="page-container">
      {news.length > 0 ? (
        <div className="news-grid">
          {news.map((article, index) => (
            <div key={index} className="news-card">
              <img
                src={article.image_url || "https://via.placeholder.com/600x300"} 
                alt={article.title}
                className="card-image"
              />
              <div className="card-body">
                <a href={article.link} target="_blank" rel="noopener noreferrer" className="card-title">
                  {article.title}
                </a>
                <p className="card-text">{article.description}</p>
                <a href={article.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Read More 
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        searched && <p className="no-news">No news found.</p>
      )}
    </div></>
  );
}
