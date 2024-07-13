import React from "react";
import "./NewsContainer.css";
import "./DarkMode.css";
import img1 from "./Free-Photo-740x492-2148873023.jpg";

export const NewsContainer = (props) => {
  let { title, desc, author, newsUrl, imgUrl, date } = props;
  return (
    <>
      <div className="news-card">
        <img src={!imgUrl ? img1 : imgUrl} alt="..." />
        <h2>{title}</h2>
        <p className="description">{desc}</p>
        <p className="author-date">
          {!author ? "Unknown Author" : author} •{" "}
          <span> {new Date(date).toGMTString()}</span>
        </p>
        <a rel="noreferrer" href={newsUrl} target="_blank">
          <span>Read More</span>
        </a>
      </div>
    </>
  );
};
