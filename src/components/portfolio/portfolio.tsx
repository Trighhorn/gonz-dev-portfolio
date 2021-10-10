import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import PortfolioItem from "./portfolioitem";

type Item = {
  item: Array<object>;
  id: string;
  description: string;
  url: string;
  name: string;
  thumb_image_url: string;
  logo_url: string;
};

function Portfolio() {
  const [data, setData] = useState<object[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPortfolio = useCallback(() => {
    axios
      .get("https://abrahangonzalez.devcamp.space/portfolio/portfolio_items")
      // .get("https://gonz-dev-portfolio-backend.uw.r.appspot.com/portfolio/")
      .then((res) => {
        setData(res.data.portfolio_items);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchPortfolio();
  }, [fetchPortfolio]);

  function portfolioItems() {
    return data.map((item: Item) => {
      return <PortfolioItem key={item.id} item={item} />;
    });
  }

  return (
    <div className="portfolio-page page-wrapper">
      <div className="back-splash">Welcome to my portfolio</div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="portfolio-contaner">
          {data.map((item) => {
            return <div>{portfolioItems()}</div>;
          })}
        </div>
      )}
    </div>
  );
}

export default Portfolio;
