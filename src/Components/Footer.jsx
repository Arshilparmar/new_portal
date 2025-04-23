import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
// import axios from "axios";
import { Link } from "react-router-dom";
// import NewsContext from "../Context/NewsContext";

const Footer = () => {
  // const { language } = useContext(NewsContext);
  // const [news, setNews] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const categories = [
    "Entertainment", "IPL2025", "Sports", "Crime",
    "Politics", "StocksAnalysis", "Technology",  "Video", 
  ];

  const categoryRoutes = {
    Crime: "/crime",
    Entertainment: "/entertainment",
    Politics: "/politics",
    StocksAnalysis: "/stocks",
    Sports: "/sports",
    Technology: "/technology",
    Video: "/video",
    IPL2025: "/cricket",
  };

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     const url = `${process.env.REACT_APP_API_KEY}&q=Latest%20news${language}`;

  //     try {
  //       const response = await axios.get(url);

  //       if (response.data && response.data.results) {
  //         setNews(response.data.results);
  //       } else {
  //         throw new Error("Unexpected API response structure");
  //       }

  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching news:", error.response || error.message || error);
  //       setError("Failed to fetch news: " + (error.response?.data?.message || error.message));
  //       setLoading(false);
  //     }
  //   };

  //   fetchNews();
  // }, [language]);

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Latest Stories */}
        {/* <div className="latest-stories">
          <h3 className="footer-heading">LATEST STORIES</h3>
          <div className="news-section4">
            {loading && <p className="loading-text">Loading news...</p>}
            {error && <p className="error-text">{error}</p>}
            <div className="news-container4">
              {!loading &&
                !error &&
                news.map((article, index) => (
                  <div key={index} className="news-item4">
                    <h3 className="news-title4">{article.title || "Untitled"}</h3>
                  </div>
                ))}
            </div>
          </div>
        </div> */}

        {/* Top Categories */}
        <div className="top-categories">
          <h3 className="section-title">TOP CATEGORIES</h3>
          <hr className="category-divider" />
          <div className="categories-grid">
            {categories.map((category, index) => {
              const path = categoryRoutes[category];
              return (
                <div key={index} className="category-item">
                  {" "}
                  {path ? (
                    <Link to={path} className="category-link">{category}</Link>
                  ) : (
                    category
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Links and Social */}
        <div className="footer-bottom">
          <div className="quick-links">
            <h4 className="Q1">QUICK LINKS</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/cricket">Live Score</Link></li>
              <li><Link to="/subscribe">Subscribe</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="social-media">
            <h4 className="F1">FOLLOW US</h4>
            <div className="icons">
              <Link to="https://www.facebook.com/" aria-label="Facebook">
                <FontAwesomeIcon className="brand2" icon={faFacebook} />
              </Link>
              <Link to="https://x.com/?lang=en" aria-label="Twitter">
                <FontAwesomeIcon className="brand2" icon={faTwitter} />
              </Link>
              <Link to="https://www.instagram.com/accounts/login/?hl=en" aria-label="Instagram">
                <FontAwesomeIcon className="brand2" icon={faInstagram} />
              </Link>
              <Link to="https://www.youtube.com/" aria-label="Youtube">
                <FontAwesomeIcon className="brand2" icon={faYoutube} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>© {new Date().getFullYear()} NewsSphere. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
