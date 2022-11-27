import React from 'react';
import dayjs from 'dayjs';
import DatesPicker from '../Components/CalComps/DatesPicker';
import MonthChanger from '../Components/CalComps/MonthChanger';
import { ShadowWrapper, DivWrapper, ButtonWrapper, PreviousMonthWrapper, TextWrapper, GridWrapper, CellWrapper, CellRow, DayWrapper, CurrentDayWrapper, TitleWrapper} from '../Components/CalComps/CalendarWrappers';
import moment from 'moment';

export default function Calendar() {
  window.moment = moment;
  moment.updateLocale('en', {week: {dow: 1}})
  
  const totalDays = 42;
  const today0 = moment();
  const [today, setToday] = React.useState(moment());
  const startDay = today.clone().startOf('month').startOf('week');
  console.log(startDay);
  const endDay = moment().endOf('month').endOf('week');
  const day = startDay.clone();
  day.subtract(1, 'day');
  const isCurrentMonth = (day) => today.isSame(day, 'month');
  const isCurrentDay = (day) => today.isSame(day, 'day'); 
  const daysArray = [...Array(42)].map(()=> day.add(1, 'day').clone());
  const handleDayChange = (newDay) => {
    console.log(newDay)
  }
  const handleMonthChange = (newDay) => {
    setToday(newDay)
  }
  return (
  <div>
    <DatesPicker ToDay={today} onWork={handleDayChange}/>
    <MonthChanger today={today} onWork={handleMonthChange}/>
    <ShadowWrapper>
   <GridWrapper>
     <CellWrapper isHeader> Пн </CellWrapper>
     <CellWrapper isHeader> </CellWrapper>
     <CellWrapper isHeader> </CellWrapper>
     <CellWrapper isHeader> </CellWrapper>
     <CellWrapper isHeader> </CellWrapper>
     <CellWrapper isHeader> </CellWrapper>
     <CellWrapper isHeader> </CellWrapper>
     {
       daysArray.map((dayItem)=>(
         <CellWrapper 
         key={dayItem.format('DDMMYYYY')}
         isWeekend={dayItem.day()===6 || dayItem.day()===0}>
         <CellRow justifyContent={'flex-end'}>
         <DayWrapper>
           {!isCurrentDay(dayItem) && isCurrentMonth(dayItem) && dayItem.format('DD')}
           {!isCurrentDay(dayItem) && !isCurrentMonth(dayItem) && <PreviousMonthWrapper> {dayItem.format('DD')}</PreviousMonthWrapper>}
           {isCurrentDay(dayItem) && <CurrentDayWrapper>{dayItem.format('DD')} </CurrentDayWrapper>}
           </DayWrapper>
           </CellRow>
         </CellWrapper>
       ))
     }
   </GridWrapper>
   </ShadowWrapper>
   </div>
  );
}
