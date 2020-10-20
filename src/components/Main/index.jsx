import React, { useEffect, useState } from "react";

import Request from "../../system/Request/request";
import apiSetts from "../../system/Setts/Api.json";
import style from "./styles.module.css";

// eslint-disable-next-line
import template from "../../js.js";
const req = new Request(apiSetts);

function App() {
  const [popList, setPopList] = useState({
    results: [],
  });

  /*
  const onScroll = () => {
    const scrolled = window.pageYOffset;
    const innerHeight = window.innerHeight;
    const resScrolled = (innerHeight + scrolled) * 1.15;

    const scrollHeight = document.documentElement.scrollHeight;

    if (resScrolled >= scrollHeight) {
      console.log("FETCH ANOTHER PAGE");
      const list = req.getListByPopularity(++popList.page, setPopList);
      list();
      window.onscroll = null;
    }
  };
  */

  useEffect(() => {
    const list = req.getListByPopularity(1, setPopList);
    list();
  }, []);

  return (
    <div className={style.app}>
      {popList.results.map((item, index) => {
        const rating = item.vote_average;

        const squares = Array.from(
          { length: Math.round(rating) },
          (_, index) => {
            let fillIndex =
              parseFloat((rating - index).toFixed(2)) >= 1
                ? 1
                : parseFloat((rating - index).toFixed(2));

            if (rating >= 6) {
              return {
                backgroundImage: `linear-gradient(to right, #76db5d ${
                  fillIndex * 100
                }%, #fff)`,
              };
            } else if (rating < 6 && rating >= 4) {
              return {
                backgroundImage: `linear-gradient(to right, #cbce34 ${
                  fillIndex * 100
                }%, #fff)`,
              };
            } else if (rating < 4) {
              return {
                backgroundImage: `linear-gradient(to right, #c01111 ${
                  fillIndex * 100
                }%, #fff)`,
              };
            }

            return {
              backgroundImage: `linear-gradient(to right, #fff ${
                fillIndex * 100
              }%, #fff)`,
            };
          }
        );

        return (
          <div className={style.movieCard} key={item.id}>
            <div className={style.movieCard__imgWrapper}>
              <img
                src={`${req.image_url}w185${item.poster_path}`}
                alt={item.title}
              ></img>
            </div>
            <div className={style.movieCard__info}>
              <h2>{item.title}</h2>
              <p>{item.release_date}</p>
              <section>{item.overview}</section>
              <div className={style.movieCard__rate}>
                <p>Rating: {item.vote_average}</p>
                <div style={squares[0]} className={style.rate__block}></div>
                <div style={squares[1]} className={style.rate__block}></div>
                <div style={squares[2]} className={style.rate__block}></div>
                <div style={squares[3]} className={style.rate__block}></div>
                <div style={squares[4]} className={style.rate__block}></div>
                <div style={squares[5]} className={style.rate__block}></div>
                <div style={squares[6]} className={style.rate__block}></div>
                <div style={squares[7]} className={style.rate__block}></div>
                <div style={squares[8]} className={style.rate__block}></div>
                <div style={squares[9]} className={style.rate__block}></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default App;

const config = fetch(
  "https://api.themoviedb.org/3/configuration?api_key=b52392c01367247b75d6e6d0d642001a"
);
config.then((r) => r.json()).then((q) => console.log(q));
