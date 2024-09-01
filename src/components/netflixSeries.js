import React from "react";
import NetflixCards from "./netflixCards";
import seriesData from "../api/seriesData.json";

const NetflixSeries = () => {
  return (
    <>
      <ul className='grid grid-three-cols'>
        {seriesData.map((curElem) => {
          return <NetflixCards key={curElem.id} curElem={curElem} />;
        })}
      </ul>
    </>
  );
};

export default NetflixSeries;
