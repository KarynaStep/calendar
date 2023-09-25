import React, { useContext } from "react";
import { format } from "date-fns";
import Month from "../Month";
import { DateContext } from "../../contexts";
import style from "./ViewMonth.module.scss";

const namesDays = ["s", "m", "t", "w", "t", "f", "s"];

const ViewMonth = (props) => {
  const date = useContext(DateContext);
  const renderNames = (name, i) => <th key={i}>{name}</th>;

  return (
    <section className={style.wrapperViewMonth}>
      <h2>{format(date, "MMMM y")}</h2>
      <table>
        <thead>
          <tr>{namesDays.map(renderNames)}</tr>
        </thead>
        <tbody>
          <Month />
        </tbody>
      </table>
    </section>
  );
};

export default ViewMonth;
