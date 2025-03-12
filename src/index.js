import React from "react";
import { useState } from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Politics from "./Components/Politics";
import Business from "./Components/Business";
import Technology from "./Components/Technology";
import Entertainment from "./Components/Entertainment";
import Sports from "./Components/Sports";
import Mainnews from "./Mainnews";
import Education from "./Components/Education";
import Bollywood from "./Components/Bollywood";
import World from "./Components/World";
import Crime from "./Components/Crime";
import Environment from "./Components/Environment";
import Health from "./Components/Health";
import Culture from "./Components/Culture";
import Travel from "./Components/Travel";
import Stocks from "./Components/Stocks";
import Cricket from "./Components/Cricket";
import Tourism from "./Components/Tourism";
import Video from "./Components/Video";
import { NewsProvider } from "./Context/NewsContext";
import NewsPage from "./Components/NewsPage";
import Premium from "./Components/Premium";
import Subscribe from "./Components/Subscribe";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Football from "./Components/Football";

export default function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log(isAuthenticated);
  
  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login"/>
  }
  
  return (
    <NewsProvider> {/* ✅ Wrap the entire app */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainnews />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/business" element={<Business />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/education" element={<Education />} />
          <Route path="/bollywood" element={<Bollywood />} />
          <Route path="/world" element={<World />} />
          <Route path="/environment" element={<Environment />} />
          <Route path="/health" element={<Health />} />
          <Route path="/crime" element={<Crime />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/cricket" element={<Cricket />} />
          <Route path="/tourism" element={<Tourism />} />
          <Route path="/video" element={<Video />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/premium" element={<Premium/>}/>
          <Route path="/football" element={<Football/>}/>
          <Route path="/subscribe" element={<Subscribe/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path="/home" element={<PrivateRoute element={<Home/>}/>}/>
        </Routes>
      </BrowserRouter>
    </NewsProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
