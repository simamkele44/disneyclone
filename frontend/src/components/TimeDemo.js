import React, { useState } from 'react';
import { TimeBetween } from '@simanongwe/time-between';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import styled from 'styled-components';


function TimeDemo() {
  const [selected, setSelected] = useState();
  const [scd_selected, setScdSelected] = useState();
  let footer = <p>Please pick a day.</p>;
  let scd_footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }
  if (scd_selected) {
    scd_footer = <p>You picked {format(scd_selected, 'PP')}.</p>;
  }
  return (
    <div className="App">
      <DateTimeContainer>
        
        <CalenderContainer>
        <h6>Reference Date</h6>
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            footer={footer}
          />
        </CalenderContainer>

        <TimeContainer>
          {(selected==null || scd_selected==null)? <p>Select Both Dates to see Time Between</p>:<TimeBetween firstdate={selected} seconddate={scd_selected}/> }
          
        </TimeContainer>
        <CalenderContainer>
          <h6>Date Two</h6>
          <DayPicker
            mode="single"
            selected={scd_selected}
            onSelect={setScdSelected}
            footer={scd_footer}
          />
        </CalenderContainer>
      </DateTimeContainer>
    </div>
  );
}

export default TimeDemo;

const DateTimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const CalenderContainer = styled.div`
  h6 {
    font-size: 30px;
    font-weight: 600;
    color: blue;
  }
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 15px;
  color: #ffffff;
  background: rgba(0, 0, 0, 1);
  font-size: 16px;
`;
