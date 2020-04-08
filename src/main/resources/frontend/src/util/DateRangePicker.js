import React from 'react'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 


const DateRangePicker = () => {

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }

  return (
    <div>
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={this.handleSelect}
      />
    </div>
  )
}

export default DateRangePicker
