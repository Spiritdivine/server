import React, { useState, useEffect } from "react";
import Card from "../components/Card/Card";

const NFT = () => {
  const [nfts, setNfts] = useState([]);
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const response = await fetch(
          `/api/v1/assets?order_direction=desc&offset=${pageNumber}&limit=12&search=${search}`

        );
        const data = await response.json();
        console.log('response:', data);
        setNfts(data.assets);
      } catch (error) {
        console.error(error);
      }
    };
    

    fetchNFTs();
  }, [search, pageNumber]);

  return (
    <div className="container">
      <h1 className="text-center mb-3">NFTs</h1>
      <div className="row">
        <div className="col-12 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Card results={nfts} />
      </div>
      <div className="row">
        <div className="col-12 mt-3 d-flex justify-content-center">
          <button
            className="btn btn-primary"
            onClick={() => setPageNumber(pageNumber - 12)}
            disabled={pageNumber === 0}
          >
            Previous
          </button>
          <button
            className="btn btn-primary ms-3"
            onClick={() => setPageNumber(pageNumber + 12)}
            disabled={nfts.length < 12}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default NFT;
