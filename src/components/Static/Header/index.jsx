import { NavLink } from "react-router-dom";

import React from "react";

import style from "./styles.module.css";
import list from "./setts.json";

function Header() {
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
        </nav>
      </div>
    </header>
  );
}
export default Header;
