import React from "react";
import { useState, useEffect } from "react";
import TableBody from "./TableBody";

import Pagination from "./Pagination";
import { fetchEpisodes } from "../Utilities/fetchers";
import Search from "./Search";
import "./styles.css";

const Home = () => {
  const [episodes, setEpisodes] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    fetchList(1, "");
  }, []);

  useEffect(() => {
    fetchList(pageNumber, searchText);
  }, [pageNumber, searchText]);

  const fetchList = (pageNumber, searchText) => {
    fetchEpisodes(pageNumber, searchText).then((response) => {
      if (!!response.info) {
        const pages = response.info.pages;
        setEpisodes(response.results);
        setNumberOfPages(pages);
      } else {
        setEpisodes([]);
        setNumberOfPages(0);
      }
    });
  };

  const handleFilter = (e) => {
    const searchValue = (e.target.value || "").trim();
    setSearchText(searchValue);
  };

  const handleChange = (newPageNumber) => {
    setPageNumber(newPageNumber);
  };

  return (
    <div className="container">
      <h2 className="header">Rick and Morty</h2>
      <div className="content">
        <Search
          placeholder={"Search by Episode Name"}
          onChange={handleFilter}
          searchText={searchText}
        />
        <TableBody episodes={episodes} />
        <Pagination
          numberOfPages={numberOfPages}
          currentSelected={pageNumber}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Home;
