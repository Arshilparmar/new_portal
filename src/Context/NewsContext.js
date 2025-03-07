import { createContext, useState } from "react";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [searched, setSearched] = useState(false);
  const [language, setLanguage] = useState('en');

  return (
    <NewsContext.Provider value={{ 
      news, 
      setNews, 
      searched, 
      setSearched,
      language,
      setLanguage
      }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
