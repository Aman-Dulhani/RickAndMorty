import React from "react";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

const Pagination = ({ numberOfPages, handleChange }) => {
  const pageNumbers = new Array(numberOfPages).fill(1);

  return (
    <div className="paging">
      <ToggleButtonGroup
        type="radio"
        name="options"
        defaultValue={1}
        onChange={handleChange}
      >
        {pageNumbers.length > 0 ? (
          pageNumbers.map((el, index) => {
            return <ToggleButton value={index + 1}>{index + 1}</ToggleButton>;
          })
        ) : (
          <ToggleButton value={1}>1</ToggleButton>
        )}
      </ToggleButtonGroup>
    </div>
  );
};

export default Pagination;
