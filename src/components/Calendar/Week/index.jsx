import React, { useContext } from 'react';
import {
  parse,
  addDays,
  getWeek,
  startOfMonth,
  getDate,
  getDay,
  getYear,
  endOfMonth,
} from "date-fns";
import PropTypes from "prop-types";
import Day from '../Day';
import { DateContext } from '../../contexts';

const Week = ({ week }) => {
  const date = useContext(DateContext);
  const dayStart = getDay(startOfMonth(date));
  const dayStartMonth = dayStart === 7 ? 0 : dayStart;
  const weekStartMonth = getWeek(startOfMonth(date));
  const weekEndMonth = getWeek(endOfMonth(date));
  const dayView = parse(`${getYear(date)} ${week}`, 'Y w', date)
 

  const daysWeek = new Array(7).fill(null).map((el, i) => {
  if (
    (week === weekStartMonth && i < dayStartMonth) ||
    (week === weekEndMonth && getDate(addDays(dayView, i)) < 7)
  ) {
    return <Day key={i} />;
  } else {
    return <Day key={i} day={addDays(dayView, i)} />;
  }
});

  return (
    <tr>{daysWeek}</tr>
  );
}

Week.propTypes = {
  week: PropTypes.number,
};

export default Week;
