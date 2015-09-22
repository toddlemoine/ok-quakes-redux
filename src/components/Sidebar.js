import React, {PropTypes} from 'react';

// import "../styles/Sidebar.css";


const Sidebar = React.createClass({

  propTypes: {

  },

  render() {
    return (
      <div className="sidebar">
        <label for="">From</label>
        <input type="text" name="dateFrom"/>
        <label for="">To</label>
        <input type="text" name="dateTo"/>
        <hr />
      </div>
    );
  }
});

export default Sidebar;