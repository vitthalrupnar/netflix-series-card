import React from "react";
import style from "./netflix.module.css";
// import styled from "styled-components";

const NetflixCards = (props) => {
  const { img_url, name, rating, description, cast, genre, watch_url } =
    props.curElem;

  const watchBotton = {
    //In js this type of styling in considerd as javascript objects
    backgroundColor:
      rating >= 8.5 ? style["top-rating"] : style["average-rating"],
    border: "none",
    color: rating >= 8.5 ? style["top-rating"] : style["average-rating"],
    padding: "1rem 2rem",
    fontWeight: "600",
    cursor: "pointer",
  };

  // const WatchBtn = styled.button({ //stytled components
  //   backgroundColor: "var(--btn-hover-bg-color)",
  //   border: "none",
  //   color: "var(--white-color)",
  //   padding: "1rem 2rem",
  //   fontWeight: "600",
  //   cursor: "pointer",
  // });

  const seriesRating =
    rating >= 8.5 ? style["top-rating"] : style["average-rating"];
  return (
    <li className={style.cards}>
      <div>
        <img
          className={style["card-image"]}
          src={img_url}
          alt=""
          width="40%"
          height="40%"
        />
      </div>
      <div className={"flex flex-col gap-4 p-5 hover:bg-slate-200"}>
        <h3>
          Name: <span>{name}</span>
        </h3>
        <h5>
          Rating:
          <span className={`${style["series-rating"]} ${seriesRating} animate-pulse`}>
            {rating}
          </span>
        </h5>
        <p className="text-3xl">Summary: {description}</p>
        <p>Cast: {cast}</p>

        <p>Genre: {genre}</p>
        <a href={watch_url}>
          <button style={watchBotton} className={`${seriesRating}`}>
            Watch Now
          </button>
          {/* <WatchBtn>Watch Now</WatchBtn> */}
        </a>
      </div>
    </li>
  );
};

export default NetflixCards;
