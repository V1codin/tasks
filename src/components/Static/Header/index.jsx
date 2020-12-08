import { NavLink } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";

import React from "react";
import style from "./styles.module.css";
import list from "./setts.json";
import req from "../../../system/Request/request";

const mapDispatchToProps = (dispatch) => {
  return {
    moviesSearchAction: (moviesResponse, value) => {
      return dispatch({
        type: "GET_MOVIES_BY_SEARCH",
        movies: moviesResponse,
        searchValue: value,
      });
    },
    clearAction: () => dispatch({ type: "CLEAR" }),
  };
};

function Header(props) {
  const { moviesSearchAction, clearAction } = props;

  const [searchValue, setSearchValue] = useState("");

  const inputHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    clearAction();
    const moviesHandler = req.getListFromSearch(
      searchValue,
      moviesSearchAction
    );
    moviesHandler();
    setSearchValue("");
  };

  return (
    <header className={style.header}>
      <div className={style.header__wrapper}>
        <nav>
          <ul className={style.header__list}>
            {list.map((item) => {
              return (
                <li key={item.id}>
                  <NavLink
                    exact
                    className={style.nav__link}
                    activeClassName={style.nav__link_active}
                    to={item.href}
                  >
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <form onSubmit={searchSubmit} className={style.header__search}>
            <input
              onChange={inputHandler}
              value={searchValue}
              type="text"
              placeholder="Search..."
              className={style.search}
            />
          </form>
        </nav>
      </div>
    </header>
  );
}
export default connect(null, mapDispatchToProps)(Header);
