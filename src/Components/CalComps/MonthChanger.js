import * as React from 'react';
import { DivWrapper, ButtonWrapper, PreviousMonthWrapper, TextWrapper, GridWrapper, CellWrapper, CellRow, DayWrapper, CurrentDayWrapper, TitleWrapper} from './CalendarWrappers';
import moment from 'moment';



export default function MonthChanger(props){
  const handlePrevClick = ()=> {
    //props.today = props.today.clone().subtract(1, 'month');
    props.onWork(props.today.clone().subtract(1, 'month'));
    console.log(props.today)
  }
  const handleNextClick = ()=> {
    //props.today = props.today.clone().subtract(1, 'month');
    props.onWork(props.today.clone().add(1, 'month'));
    console.log(props.today)
  }
  return(
  <DivWrapper>
    <DivWrapper>
    <ButtonWrapper id="prev" onClick={handlePrevClick}> &lt; </ButtonWrapper>
  </DivWrapper>
  <DivWrapper>
      <TitleWrapper>{props.today.format('MMMM')}</TitleWrapper>
      <TextWrapper>{props.today.format('YYYY')}</TextWrapper>
    </DivWrapper>
    <DivWrapper>
      <ButtonWrapper id="next" onClick={handleNextClick}> &gt; </ButtonWrapper>
    </DivWrapper>
  </DivWrapper>
);
}