import React, { useContext } from "react";
import PropTypes from "prop-types";
import { format, getDate } from "date-fns";
import { DateContext } from "../../contexts/";
import cx from "classnames";
import styles from "./Day.module.scss";

const Day = ({ day }) => {
  const date = useContext(DateContext);
  if (day) {
    const styleCurrent = cx(styles.item, {
      [styles.choice]: getDate(date) === getDate(day),
    });
    
    return <td className={styleCurrent}>{format(day, "d")}</td>;
  }
  return <td></td>;
};

Day.propTypes = {
  day: PropTypes.object,
};

export default Day;
