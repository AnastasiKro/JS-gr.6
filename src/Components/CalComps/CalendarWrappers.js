import * as React from 'react';
import styled from 'styled-components';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const ShadowWrapper = styled.div`
border-top: 1px solid #737374;
border-left: 1px solid #464648;
border-right: 1px solid #464648;
border-bottom: 1px solid #464648;
border-radius: 8px;
overflow: hidden;
box-shadow: 0 0 0 1px #1A1A1A, 0 8px 20px 6px #888;
`;

export const DatePickerWrapper = styled(DatePicker)`
  padding: 8px;
  margin-right: 4px;
  width: 400px;
  left: 25%;
  top: 15px;
`;

export const DivWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;
export const TextWrapper = styled.span`
  font-size: 32px;
`;
export const TitleWrapper = styled(TextWrapper)`
  font-weight: bold;
  margin-right: 8px;
`;

export const ButtonWrapper = styled('button')`
  border: unset;
  background-color: #E6E6FA;
  height: 32px;
  margin-right: 2px;
  border-radius: 4px;
  border-color: #7B68EE;
  border-style: solid;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  //grid-template-rows: repeat(6, 1fr);
  grid-gap: 1.1px;
  background-color: #0000FF;
  `;

export const CellWrapper = styled.div`
  min-width: 140px;
  min-height: ${props=> props.isHeader ? '40px' : '80px'};
  background-color: ${props=> props.isWeekend ? '#800000' : '#191970'};
  //color: #444
`;
export const CellRow = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent ? props.justifyContent: 'flex-start'};
`;
export const DayWrapper = styled.div`
  height: 33px;
  width: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  color: #FFFFFF;
`;
export const DayOfWeekWrapper = styled(DayWrapper)`
  position: relative;
  left: 40%;
  color: #FFFFFF;
`;

export const CurrentDayWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: #f00;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const PreviousMonthWrapper = styled(DayWrapper)`
  color: #A9A9A9;
`;