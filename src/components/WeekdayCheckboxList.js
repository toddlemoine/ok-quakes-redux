import React from 'react';
import CheckboxList from './CheckboxList'
import CheckboxFilter from './CheckboxFilter'

const WEEKDAYS = 'Weekdays';
const WEEKEND = 'Weekend';

class WeekdayCheckboxList extends React.Component {
  render() {
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => {
      return { value: index, label: day };
    });

    let filters = [WEEKDAYS, WEEKEND].map((filter, index) => {
      return { value: filter, label: filter };
    });

    return (
      <div className="weekday-checkbox-list">
        <CheckboxFilter filters={filters} label="Filter" />
        <CheckboxList items={days} onChange={this.props.onChange} />
      </div>
    );
  }
}


export default WeekdayCheckboxList;