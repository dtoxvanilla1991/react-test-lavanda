import React, { useEffect } from "react";
import "./App.css";

import { Article } from "./articles";
import Articles from "./components/Articles";
import { useState } from "react";

const title = "Sorting Articles";

const App: React.FC<{ articles: Article[] }> = ({ articles }) => {
const [descendingArticles, setArticles] = useState(()=> articles?.sort((a,b) => b.upvotes - a.upvotes));

const descendingOrder = () => {
  let orderByVote = [...articles]?.sort((a,b) => b.upvotes - a.upvotes);
  return setArticles(orderByVote);
}
const orderByDate = () => {
  let orderByDate = articles?.sort((a,b) => Number(new Date(b.date)) - Number(new Date(a.date)));
  return setArticles(orderByDate);
}



  return (
    <div className="App">
      <div className="headerbar">{title}</div>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button data-testid="most-upvoted-link" className="small" onClick={descendingOrder}>
          Most Upvoted
        </button>
        <button data-testid="most-recent-link" className="small" onClick={orderByDate}>
          Most Recent
        </button>
      </div>
      <Articles articles={descendingArticles} />
    </div>
  );
};

export default App;
