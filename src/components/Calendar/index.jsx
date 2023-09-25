import React, { useState } from "react";
import ViewDay from "./ViewDay";
import ViewMonth from "./ViewMonth";
import { DateContext } from "../contexts";
import styles from "./Calendar.module.scss";

const Calendar = () => {
  const [date] = useState(new Date());//'2020-07-31'
  return (
    <DateContext.Provider value={date}>
      <div className={styles.wrapper}>
        <ViewDay />
        <ViewMonth />
      </div>
    </DateContext.Provider>
  );
};

export default Calendar;
