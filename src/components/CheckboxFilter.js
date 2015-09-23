import React from 'react';
import classnames from 'classnames';

class CheckboxFilter extends React.Component {

    handleRadioChange (event) {
        console.log(arguments);
    }

    render() {
        return (
            <div className="checkbox-filter">
                {this.props.label}
                {this.props.filters.map(filter => {
                    return <label className={classnames("filter", {active: this.props.active == filter.value})}>
                        <input type="radio" value={filter.value} onChange={this.handleRadioChange} />
                        {filter.label}
                        </label>
                })}
            </div>
        );
    }
}

export default CheckboxFilter;
