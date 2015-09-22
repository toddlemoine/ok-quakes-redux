import React, {PropTypes} from 'react';
import {GoogleMap, Marker} from 'react-google-maps';


const Map = React.createClass({

  propTypes: {
    tweets: PropTypes.array
  },

  handleRightClick() {
    console.log('right click', arguments);
  },

  render() {
    let top10 = this.props.date && this.props.date.top(Infinity) || [];

    return (
      <div className="map" style={{height: '100%'}}>
        <GoogleMap containerProps={{
          ...this.props,
          style: { height: "100%" }
        }}
        ref="map"
        defaultZoom={7}
        defaultCenter={{lat: 35.3090716, lng: -98.7165585}}>
        {top10.map(d => (
          <Marker
            label={d.text}
            position={{
              lat: +d.lat,
              lng: +d.long
            }}
            defaultAnimation={2}
            key={d.id}
            onRightclick={this.handleRightClick} />
        ))}
      </GoogleMap>
      </div>
    );
  }
});

export default Map;