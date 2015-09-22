import {reject, map, uniq} from 'lodash';

function initCrossfilter(state, tweets) {
    tweets = reject(tweets, d => !d.city);

    // Create city index
    citiesIndex = uniq(tweets.map( d => d.city ? d.city.toLowerCase() : '')).sort();

    // Coerce any values
    tweets.forEach((d, index) => {
        // var timestamp = d.at.substr(0, d.at.lastIndexOf('.'));
        // d.date = parseDate(timestamp);
        // d.z = +d.z.replace('km', '');
        // d.magnitude = +d.magnitude;
        d.cityIndex = citiesIndex.indexOf(d.city.toLowerCase());
    });

    _tweets = tweets = reject(tweets, d => !d.date);

    // Create our crossfilters
    tweets = crossfilter(tweets);
    // all = tweets.group();

    date = tweets.dimension(d => d.date);
    dates = date.group(d3.time.day);

    day = tweets.dimension(d => d.date.getDay());
    days = day.group();

    hour = tweets.dimension(d => d.date.getHours() + d.date.getMinutes() / 60);
    hours = hour.group(Math.floor);

    city = tweets.dimension(d => d.cityIndex);
    cities = city.group();

    magnitude = tweets.dimension(d => d.magnitude);
    magnitudes = magnitude.group(Math.floor);
}

export default initCrossfilter;