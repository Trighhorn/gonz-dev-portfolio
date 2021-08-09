import React, { useState, useEffect } from "react";
import axios from "axios";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(
//     (url) => {
//       axios.get(url).then((res) => {
//         const portfolioData = res.data;
//         setData(portfolioData);
//         setIsLoading(false);
//       });
//     },
//     [data]
//   );

//   return { data, isLoading };
// };

function Portfolio() {
  //   const { data, isLoading } = useFetch(
  //     "https://gonz-dev-portfolio-backend.uw.r.appspot.com/portfolio/"
  //   );
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
          {data.map((portfolioItem) => {
            const { id, name, url, description, position, tags, addedDate } =
              portfolioItem;
              return(
                  <div className="portfolio-item">
                    <div className="id">{id}</div>
                    <div className="name">{name}</div>
                    <div className="url">{url}</div>
                    <div className="description">{description}</div>
                    <div className="position">{position}</div>
                    <div className="tags">{tags}</div>
                    <div className="added-date">{addedDate}</div>
                  </div>
              )
          })}
        </div>
      )}
    </div>
  );
}

export default Portfolio;
