import React from "react";
import propTypes from "prop-types";
import style from "./styles.module.css";

export default function Out({ setts, closeClick }) {
  if (Object.keys(setts).length === 0) return null;

  const article = style.out__article + " " + style[setts.articleStyle];
  const topic =
    setts.articleStyle === "error" ? "Вы ввели не правильно" : "Ваши данные";

  const gender =
    setts.articleStyle === "error" && setts.gender !== undefined ? "Пол" : "";

  return (
    <div className={style.out}>
      <div className={style.out__wrapper}>
        <h2 className={style.wrapper__topic}>{topic}</h2>
        <p className={article}>
          {setts.firstName ? `Имя: ${setts.firstName}` : ""}
        </p>
        <p className={article}>
          {setts.lastName ? `Фамилия: ${setts.lastName}` : ""}
        </p>
        <p className={article}>
          {setts.gender === "" || setts.gender === undefined
            ? gender
            : `Пол : ${setts.gender}`}
        </p>
        <p className={article}>
          {setts.username ? `Username: ${setts.username}` : ""}
        </p>
        <p className={article}>{setts.email ? `Email: ${setts.email}` : ""}</p>
        <button onClick={closeClick}>Ok</button>
      </div>
    </div>
  );
}

Out.propTypes = {
  setts: propTypes.object.isRequired,
  closeClick: propTypes.func.isRequired,
};
