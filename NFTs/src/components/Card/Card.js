import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

const Card = ({ results }) => {
  let display;

  if (results && results.length > 0) {
    display = results.map((nft) => {
      const {
        id,
        name,
        description,
        image_url,
        asset_contract: { name: collectionName },
        permalink,
      } = nft;

      return (
        <Link
          to={permalink}
          key={id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
          <div
            className={`${styles.card} d-flex flex-column justify-content-center`}
          >
            <img className={`${styles.img} img-fluid`} src={image_url} alt="" />
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-4">{name}</div>
              <div className="fs-6 fw-normal">Collection:</div>
              <div className="fs-5">{collectionName}</div>
              <div className="fs-6 fw-normal mt-4">Description:</div>
              <div className="fs-5">{description}</div>
            </div>
          </div>
        </Link>
      );
    });
  } else {
    display = "No NFTs Found :/";
  }

  return <div className="row">{display}</div>;
};

export default Card;
