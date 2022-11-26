import * as React from 'react';
import { DivWrapper, ButtonWrapper, PreviousMonthWrapper, TextWrapper, GridWrapper, CellWrapper, CellRow, DayWrapper, CurrentDayWrapper, TitleWrapper} from './CalendarWrappers';
import moment from 'moment';



export default function MonthChanger(){
  const today = moment();
  return(
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
);
}