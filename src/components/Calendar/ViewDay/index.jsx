import React, { useContext } from 'react';
import {format} from "date-fns"
import { DateContext } from '../../contexts';
import style from "./ViewDay.module.scss"

const ViewDay = (prors) => {
  const date = useContext(DateContext)
  return (
    <section className={style.wrapperViewDay}>
      <h3>{format(date, "eeee")}</h3>
      <h2>{format(date, "d")}</h2>
    </section>
  );
};

export default ViewDay;
