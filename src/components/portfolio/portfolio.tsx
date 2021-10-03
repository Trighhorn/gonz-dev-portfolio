import React, { useState, useEffect } from "react";
import axios from "axios";
import PortfolioItem from "./portfolioitem";

function Portfolio() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://gonz-dev-portfolio-backend.uw.r.appspot.com/portfolio/")
      .then((res) => {
        const portfolioData = res.data;
        setData(portfolioData);
        setIsLoading(false);
      });
  }, [data]);

  return (
    <div className="portfolio-page page-wrapper">
      <div className="back-splash">Welcome to my portfolio</div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="portfolio-contaner">
          {data.map(
            (item: {
              id: string;
              description: string;
              url: string;
              name: string;
              thumbnail_image_url: string;
              logo_url: string;
            }) => {
              return <PortfolioItem key={item.id} item={item} />;
            }
          )}
        </div>
      )}
    </div>
  );
}

export default Portfolio;