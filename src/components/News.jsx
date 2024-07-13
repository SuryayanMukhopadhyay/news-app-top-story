import React, { useState, useEffect } from "react";
import { NewsContainer } from "./NewsContainer";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";
import "./News.css";
import "./DarkMode.css";

// API_KEY_1 = "40a5d64aa35649da804375465e222391"
// API_KEY_2 = "22356282653a4251a5e46127a2b90da1"
// API_KEY_3 = "6f35d29172f7452688f47dce56201301"

export const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const getNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=22356282653a4251a5e46127a2b90da1&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let jsonData = await data.json();
    setArticles(jsonData.articles);
    setTotalResults(jsonData.totalResults);
  };

  useEffect(() => {
    getNews();
  }, []);

  const getMoreNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=22356282653a4251a5e46127a2b90da1&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let jsonData = await data.json();
    setArticles(articles.concat(jsonData.articles));
    setTotalResults(jsonData.totalResults);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={articles.length}
        next={getMoreNews}
        hasMore={articles.length !== totalResults}
        loader={<h4>Loading...</h4>}
      >
        <div className="news-screen">
          <h1>Top {props.headline} Headlines Today</h1>
          <div className="row">
            {articles.map((newsitem) => {
              return (
                <div className="col-md-3 my-5" key={newsitem.url}>
                  <NewsContainer
                    title={
                      !newsitem.title
                        ? "Click Below to read more..."
                        : newsitem.title.slice(0, 50) + "..."
                    }
                    desc={
                      !newsitem.description
                        ? "Click Below to read more..."
                        : newsitem.description.slice(0, 125) + "..."
                    }
                    author={newsitem.author}
                    newsUrl={newsitem.url}
                    imgUrl={newsitem.urlToImage}
                    date={newsitem.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 12,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
