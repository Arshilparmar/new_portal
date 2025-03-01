import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import "./Header.css";

export default function Header(props) {
  const [query, setQuery] = useState("");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const fetchNews = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setSearched(true);

    const apiKey = "pub_721540ef95a2fa350b4882bca89347a2770c4"; // Replace with your API key
    const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${encodeURIComponent(query)}&language=en`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setNews(data.results || []);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fix">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="topbar">
          <div className="search-bar-container">
            <div>
              <input
                type="text"
                className="search-bar border p-2 rounded w-full"
                placeholder="Enter keyword..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button onClick={fetchNews} className="search-icon" aria-label="Search">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
            <span>Wednesday, Feb 28, 2025</span>
          </div>

          {loading && <p className="mt-4">Loading...</p>}

          <div className="mt-4">
            {news.length > 0 ? (
              news.map((article, index) => (
                <div key={index} className="p-4 border-b">
                  <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold">
                    {article.title}
                  </a>
                  <p className="text-gray-600">{article.description}</p>
                </div>
              ))
            ) : (
              searched && !loading && <p>No news found.</p>
            )}
          </div>

          <div className="main-navbar">
            <div className="logo">
              <img
                src="https://logowik.com/content/uploads/images/t_black-sphere-globe-design4707.logowik.com.webp"
                alt="Logo"
              />
              <div className="text-box">
                <h1 className="news">News</h1>
                <span className="sphere">Sphere</span>
              </div>
            </div>
          </div>

          <div className="topbar-right">
            <div>
              <Link to="#">English</Link> | 
              <Link to="#">हिंदी</Link> | 
              <Link to="#">ગુજરાતી</Link> |
              <Link to="#">বাংলা</Link> | 
              <Link to="#">मराठी</Link> | 
              <Link to="#">தமிழ்</Link>
            </div>
            <div>
              <Link to="#" aria-label="Facebook">
                <FontAwesomeIcon className="brand" icon={faFacebook} />
              </Link>
              <Link to="#" aria-label="Twitter">
                <FontAwesomeIcon className="brand" icon={faTwitter} />
              </Link>
              <Link to="#" aria-label="Instagram">
                <FontAwesomeIcon className="brand" icon={faInstagram} />
              </Link>
              <Link to="#" aria-label="Youtube">
                <FontAwesomeIcon className="brand" icon={faYoutube} />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/politics">
                Politics
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/business">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/technology">
                Technology
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/sports">
                Sports
              </Link>
            </li>
          </ul>

          <div className="register-signin">
            <Link to="#" className="btn register">
              Register
            </Link>
            <Link to="#" className="btn signin">
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      {/* Bottom Bar */}
      <nav>
        <div className="bottom-bar">
          <div className="trending">TRENDING</div>
          <Link to="/stocks">Smart Stocks</Link>
          <Link to="#">UPSC Offer</Link>
          <Link className="cricket" to="/cricket">Cricket</Link>
          <Link className="premium" to="#">Premium</Link>
          <Link to="/tourism">Tourism</Link>
          <Link to="/video">🔴 Live TV</Link>                                                         
          <Link to="/health">Health & Wellness</Link>
        </div>
      </nav>
    </div>
  );
}

Header.defaultProps = {
  title: "Your Title Here",
  searchBar: true,
};

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired,
};
