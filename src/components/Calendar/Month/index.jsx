import React, { useContext } from "react";
import Week from "../Week";
import { parse,
  startOfMonth,
  getWeeksInMonth,
  getWeek,
  addWeeks,
} from "date-fns";
import { DateContext } from "../../contexts";

const Month = (props) => {
  const date = useContext(DateContext);
  const dayStartMonth = startOfMonth(date)
  const weekStartMonth = parse(`${getWeek(dayStartMonth)}`, 'w', dayStartMonth)

  const weeksArray = new Array(getWeeksInMonth(date))
    .fill(null)
    .map((elem, i) => (<Week key={i} week={getWeek(addWeeks(weekStartMonth, i))} />
    ))
  
  return <>{weeksArray}</>;
};

export default Month;

