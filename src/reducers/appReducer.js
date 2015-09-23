import d3 from 'd3';
import crossfilter from 'crossfilter';
import {reject, map, uniq} from 'lodash';
import * as types from '../constants/actionTypes';

let initialState = {
    // ui
    dateRange: [],
    filters: [],
    results: [],

    // crossfilter dimensions
    tweets: null,
    date: null,
    magnitude: null,
    hour: null,
    city: null,
    day: null,

    // crossfilter groups
    dates: null,
    magnitudes: null,
    hours: null,
    cities: null,
    days: null
};

function initCrossfilter(state, tweets) {
    let citiesIndex;
    let parseDate = d3.time.format('%Y-%m-%d %X').parse;

    tweets = reject(tweets, d => !d.city || !d.at);

    // Create city index
    citiesIndex = uniq(tweets.map( d => d.city ? d.city.toLowerCase() : '')).sort();

    // Coerce any values
    tweets.forEach((d, index) => {
        var timestamp = d.at.substr(0, d.at.lastIndexOf('.'));
        d.date = parseDate(timestamp || d.at);
        // d.z = +d.z.replace('km', '');
        d.magnitude = +d.magnitude;
        d.cityIndex = citiesIndex.indexOf(d.city.toLowerCase());
    });

    // Create our crossfilters
    let _tweets = state.tweets = crossfilter(tweets);
    // all = tweets.group();

    state.date = _tweets.dimension(d => d.date);
    state.dates = state.date.group(d3.time.day);

    state.day = _tweets.dimension(d => d.date.getDay());
    state.days = state.day.group();

    state.hour = _tweets.dimension(d => d.date.getHours() + d.date.getMinutes() / 60);
    state.hours = state.hour.group(Math.floor);

    // state.city = _tweets.dimension(d => d.cityIndex);
    state.city = _tweets.dimension(d => d.city);
    state.cities = state.city.group();

    state.magnitude = _tweets.dimension(d => d.magnitude);
    state.magnitudes = state.magnitude.group(Math.floor);

    return state;
}


export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOAD_QUAKE_DATA_COMPLETED:
            // Do something to load async
            return initCrossfilter(state, action.data);

        case types.SET_DATE_RANGE:
            // day.filterAll();
            // city.filterAll();
            // filters.forEach(function(filter) {
            //     if (filter.dim === 'city') city.filter(filter.value);
            //     if (filter.dim === 'day') day.filter(filter.value);
            //     if (filter.dim === 'magnitude') magnitude.filter(filter.value);
            // });
            break;

        case types.RESET:
            break;

        default:
            return state;
            break;
    }
}