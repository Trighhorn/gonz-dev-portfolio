import React, { useState } from "react";
import { Link } from "react-router-dom";

interface PortfolioItemType {
  item: {
    id: string;
    description: string;
    url: string;
    name: string;
    thumb_image_url: string;
    logo_url: string;
  };
}

const PortfolioItem = (props: PortfolioItemType) => {
  const [portfolioItemClass, setPortfolioItemClass] = useState("");

  const { id, description, thumb_image_url, logo_url } = props.item;
  // add url support
  // const { id, name, description, thumb_image_url, logo_url } = this.props.item

  function handleMouseEnter() {
    setPortfolioItemClass("image-blur");
  }
  function handleMouseLeave() {
    setPortfolioItemClass("");
  }

  return (
    <Link to={`/portfolio/${id}`}>
      <div
        className="portfolio-item-wrapper"
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <div
          className={"portfolio-img-background " + portfolioItemClass}
          style={{
            backgroundImage: `url(${thumb_image_url})`,
          }}
        />
        <div className="img-text-wrapper">
          <div className="logo-wrapper">{<img src={logo_url} alt='programming language logo' />}</div>
          <div className="subtitle">{description}</div>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioItem;
