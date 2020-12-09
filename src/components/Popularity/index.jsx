import req from "../../system/Request/request";
import style from "./styles.module.css";
import thumbnail from "../../system/img/loading_thumbnail.png";
import scrollCalculate from "../../system/Setts/scrollCalc";
import ratingCircles from "../../system/Setts/ratingCalc";
import requestAtions from "../../system/Setts/requestActions/actions";

import React, { useEffect } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    searchValue: state.movies.search,
    request: state.movies.request,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    moviesPopularityAction: (moviesResponse) => {
      return dispatch({
        type: "GET_MOVIES_BY_POPULARITY",
        movies: moviesResponse,
        request: "popularity",
      });
    },
    moviesSearchAction: (moviesResponse) => {
      return dispatch({
        type: "GET_MOVIES_BY_SEARCH",
        movies: moviesResponse,
        request: "search",
      });
    },
    clearAction: () => dispatch({ type: "CLEAR" }),
  };
};

function App(props) {
  const { movies, request, moviesPopularityAction, clearAction } = props;

  const onScroll = () => {
    const checker = scrollCalculate();

    if (checker) {
      console.log("FETCH ANOTHER PAGE");

      const list = requestAtions.hasOwnProperty(request)
        ? requestAtions[request](req, props)
        : requestAtions.error;

      list();
      window.onscroll = null;
    }
  };

  useEffect(() => {
    window.onscroll = onScroll;
    // eslint-disable-next-line
  }, [movies.results]);

  useEffect(() => {
    clearAction();

    const list = req.getListByPopularity(moviesPopularityAction, 1);
    list();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={style.app}>
      {movies.results.map((item) => {
        const rating = item.vote_average;

        const squares = Array.from(
          { length: Math.ceil(rating) },
          (_, index) => {
            return ratingCircles(index, rating);
          }
        );

        const moviePoster =
          req.image_url && item.poster_path
            ? `${req.image_url}${item.poster_path}`
            : thumbnail;

        return (
          <div className={style.movieCard} key={item.id * Math.random() + 1}>
            <div className={style.movieCard__content}>
              <img src={moviePoster} alt={item.title}></img>
              <div className={style.content__title}>
                <p>{item.title}</p>
              </div>
              <div className={style.movieCard__rate}>
                <p>{item.vote_average}</p>
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
            <div className={style.movieCard__info}>
              <p>{item.release_date}</p>
              <section>{item.overview}</section>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
