import React, {PropTypes} from 'react';
import {Component} from 'react-class-helper';

class CheckboxList extends Component {

  constructor(props) {
    super(props);
  }

  handleCheckboxChange (event) {
    this.props.onChange(event, event.target.value);
  }

  render() {
    return (
        <ul class="checkbox-list">
        { this.props.items.map((item, index) => {
          return (
            <li key={index}>
              <label htmlFor={`chk${index}`}>
                <input name={`chk${index}`} type="checkbox"
                  value={item.value}
                  onChange={this.handleCheckboxChange}
                  />
                {item.label}
              </label>
            </li>
            );
        }) }
        </ul>
    );
  }
};

export default CheckboxList;


