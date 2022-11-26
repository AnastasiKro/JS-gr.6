import * as React from 'react';
import {ShadowWrapper, DivWrapper, ButtonWrapper, PreviousMonthWrapper, TextWrapper, GridWrapper, CellWrapper, CellRow, DayWrapper, CurrentDayWrapper, TitleWrapper} from '../Components/CalComps/CalendarWrappers';
import moment from 'moment';
import DatesPicker from '../Components/CalComps/DatesPicker';



export default function Calendar() {
  window.moment = moment;
  moment.updateLocale('en', {week: {dow: 1}})
  //const [value, setValue] = React.useState(dayjs('2022-04-07'));
  const totalDays = 42;
  const today = moment();
  const startDay = today.clone().startOf('month').startOf('week');
  const endDay = moment().endOf('month').endOf('week');
  const calendar = [];
  const day = startDay.clone();
  const month = today.clone();
  day.subtract(1, 'day');
  const isCurrentMonth = (day) => moment().isSame(day, 'month'); 
  const isCurrentDay = (day) => moment().isSame(day, 'day'); 
  const daysArray = [...Array(42)].map(()=> day.add(1, 'day').clone());
  const MonthYear = ()=>(
    <DivWrapper>
      <DivWrapper>
      <ButtonWrapper id="prev" onClick={()=>today.subtract(1, 'month')}> &lt; </ButtonWrapper>
    </DivWrapper>
    <DivWrapper>
        <TitleWrapper>{today.format('MMMM')}</TitleWrapper>
        <TextWrapper>{today.format('YYYY')}</TextWrapper>
      </DivWrapper>
      <DivWrapper>
        <ButtonWrapper> &gt; </ButtonWrapper>
      </DivWrapper>
    </DivWrapper>
  )

  return (
  <div>
    <div>previous next</div>
    <DatesPicker />
    <MonthYear/>
    <ShadowWrapper>
   <GridWrapper>
     {
       daysArray.map((dayItem)=>(
         <CellWrapper 
         key={dayItem.format('DDMMYYYY')}
         isWeekend={dayItem.day()===6 || dayItem.day()===0}>
         <CellRow justifyContent={'flex-end'}>
         <DayWrapper>
           {!isCurrentDay(dayItem) && isCurrentMonth && dayItem.format('DD')}
           {!isCurrentDay(dayItem) && !isCurrentMonth &&<PreviousMonthWrapper> {dayItem.format('DD')}</PreviousMonthWrapper>}
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