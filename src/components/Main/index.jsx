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
      {popList.results.map((item) => {
        const squares = Array.from(
          {
            length: Math.round(item.vote_average),
          },
          () => {
            if (item.vote_average >= 6) {
              return "rated";
            } else if (item.vote_average < 6 && item.vote_average >= 4) {
              return "rated_yellow";
            } else if (item.vote_average < 4) {
              return "rated_red";
            }
            return "";
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
                <div
                  className={style.rate__block + " " + style[squares[0]]}
                ></div>
                <div
                  className={style.rate__block + " " + style[squares[1]]}
                ></div>
                <div
                  className={style.rate__block + " " + style[squares[2]]}
                ></div>
                <div
                  className={style.rate__block + " " + style[squares[3]]}
                ></div>
                <div
                  className={style.rate__block + " " + style[squares[4]]}
                ></div>

                <div
                  className={style.rate__block + " " + style[squares[5]]}
                ></div>
                <div
                  className={style.rate__block + " " + style[squares[6]]}
                ></div>
                <div
                  className={style.rate__block + " " + style[squares[7]]}
                ></div>
                <div
                  className={style.rate__block + " " + style[squares[8]]}
                ></div>
                <div
                  className={style.rate__block + " " + style[squares[9]]}
                ></div>
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
