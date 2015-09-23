import React, {Component, PropTypes} from 'react';
import CheckboxList from './CheckboxList'
import WeekdayCheckboxList from './WeekdayCheckboxList'

class Home extends Component {

  constructor(props) {
    super(props);
  }

  handleCityChange (e, city) {
    console.log(city);
  }

  handleDayChange (e, day) {
    console.log(day);
  }

  render() {
    // let top10 = this.props.date.top(10) || [];
    let top10Cities = this.props.cities.top(50) || [];

    return (
      <div class="home">
        <WeekdayCheckboxList onChange={this.handleDayChange} />
        <CheckboxList
          items={top10Cities.map(d => ({ label: d.key, value: d.value }) )}
          onChange={this.handleCityChange}
          />
      </div>
    );
  }
};

export default Home;


