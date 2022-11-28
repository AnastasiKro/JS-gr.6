import React from 'react';
import dayjs from 'dayjs';
//import DatesPicker from '../Components/CalComps/DatesPicker';
//import MonthChanger from '../Components/CalComps/MonthChanger';
import { DivWrapper, DayOfWeekWrapper, ButtonWrapper, PreviousMonthWrapper, GridWrapper, CellWrapper, CellRow, DayWrapper, CurrentDayWrapper} from './CalendarWrappers';
import moment from 'moment';

export default function Cell(props){
  const startDay = props.today.clone().startOf('month').startOf('week');
  const day = startDay.clone();
  day.subtract(1, 'day');
  const isCurrentMonth = (day) => props.today.isSame(day, 'month');
  const isCurrentDay = (day) => moment().isSame(day, 'day'); 
  const daysArray = [...Array(42)].map(()=> day.add(1, 'day').clone());
  return (
    <GridWrapper>
     <CellWrapper isHeader> <DayOfWeekWrapper> Пн </DayOfWeekWrapper></CellWrapper>
     <CellWrapper isHeader>  <DayOfWeekWrapper> Вт </DayOfWeekWrapper></CellWrapper>
     <CellWrapper isHeader>  <DayOfWeekWrapper> Ср </DayOfWeekWrapper></CellWrapper>
     <CellWrapper isHeader>  <DayOfWeekWrapper>Чт </DayOfWeekWrapper></CellWrapper>
     <CellWrapper isHeader>  <DayOfWeekWrapper> Пт </DayOfWeekWrapper></CellWrapper>
     <CellWrapper isHeader isWeekend>  <DayOfWeekWrapper> Сб </DayOfWeekWrapper></CellWrapper>
     <CellWrapper isHeader isWeekend>  <DayOfWeekWrapper> Вс </DayOfWeekWrapper></CellWrapper>
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
  );
}