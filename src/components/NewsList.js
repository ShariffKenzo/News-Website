import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  
 

  useEffect(() => {
    const getArticles = async () => {
    var topicofchoice = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=5c3f5e3e34d5445ca0150da67a3f98b5'
      const response = await axios.get(topicofchoice)
      setArticles(response.data.articles)
      console.log("useeffect ran")


    };

    getArticles();
  },[]);


  

  return (
    <div>
      {articles.map((article) => {
        return (
          <NewsItem
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
          />
        );
      })}
    </div>
  );
};

export default NewsList;
