import React from 'react';
import dayjs from 'dayjs';
import DatesPicker from '../Components/CalComps/DatesPicker';
import MonthChanger from '../Components/CalComps/MonthChanger';
import { ShadowWrapper, DivWrapper, DayOfWeekWrapper, ButtonWrapper, PreviousMonthWrapper, GridWrapper, CellWrapper, CellRow, DayWrapper, CurrentDayWrapper} from '../Components/CalComps/CalendarWrappers';
import moment from 'moment';
import Cell from '../Components/CalComps/Cell';

export default function Calendar() {
  window.moment = moment;
  moment.updateLocale('en', {week: {dow: 1}})
  
  //const totalDays = 42;
  //const today0 = moment();
  const [today, setToday] = React.useState(moment());
  const startDay = today.clone().startOf('month').startOf('week');
  //console.log(startDay);
  //const endDay = moment().endOf('month').endOf('week');
  const day = startDay.clone();
  day.subtract(1, 'day');
  //const isCurrentMonth = (day) => today.isSame(day, 'month');
  //const isCurrentDay = (day) => moment().isSame(day, 'day'); 
  //const daysArray = [...Array(42)].map(()=> day.add(1, 'day').clone());
  const handleDayChange = (newDay) => {
    console.log(newDay)
    setToday(newDay);
  }
  const handleMonthChange = (newDay) => {
    setToday(newDay)
  }
  return (
  <div>
    <DatesPicker ToDay={today} onWork={handleDayChange}/>
    <MonthChanger today={today} onWork={handleMonthChange}/>
    <ShadowWrapper>
      <Cell today={today}>
      </Cell>
   </ShadowWrapper>
   </div>
  );
}