import { render } from '@testing-library/react';
import React, { Component } from 'react';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class Duration extends Component {
constructor(props){
    super(props);
    this.state ={
        startDate: null,
        endDate: null
    }
}

    render(){
    return (
        <div className="Duration">
            <DateRangePicker
  startDate={this.state.startDate} 
  endDate={this.state.endDate} 
  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} 
  focusedInput={this.state.focusedInput} 
  onFocusChange={focusedInput => this.setState({ focusedInput })} 
/>
        </div>
    );
    }
};

export default Duration;