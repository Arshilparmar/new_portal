import Features from "../Features";
import Sidebar from "../Sidebar";
import Layout from "./Layout";
import "./Premium.css";
import { useNavigate } from "react-router-dom";

export default function Premium() {
  const navigate = useNavigate();
  return (
    <>
    <div>
      <Layout/>
    </div>
    <div>
      <Features/>
    </div>
    <div>
      <Sidebar/>
    </div>
    <div className="container4">
      {/* Premium Access Section */}
      <div className="premium-box">
        <div className="logo-container">
          <div className="logo45"><img
                src="https://logowik.com/content/uploads/images/t_black-sphere-globe-design4707.logowik.com.webp"
                alt="Logo"
              /></div>
        </div>
        <p className="signin-text1">
          Already a subscriber? <span className="signin-link">Sign in</span>
        </p>
        <h2 className="access-text">
          You’re just one step away from accessing this premium story.
        </h2>
        <button className="subscribe-btn" onClick={() => navigate("/subscribe")}>Subscribe Now</button>
      </div>
      
      {/* Benefits Section */}
      <div className="benefits-box">
        <h3 className="benefits-title">Discover the Benefits of Our Subscription!</h3>
        <ul className="benefits-list">
          <li><span className="check">✔</span> Stay informed with access to our award-winning journalism.</li>
          <li><span className="check">✔</span> Avoid misinformation with trusted, accurate reporting.</li>
          <li><span className="check">✔</span> Make smarter decisions with insights that matter.</li>
        </ul>
      </div>
    </div></>
  );
}
