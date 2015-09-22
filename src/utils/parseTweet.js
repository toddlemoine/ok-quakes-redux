function parseTweet(d) {
    var reMagnitude = /Magnitude \d\.?\d?/;
    var reTimestamp = /20\d+\-\d+\-\d+ \d+\:\d+:\d+(\.\d+)?/;
    var reTimezone = /\([A-Z]{3}\)/;
    var reDistance = /\d\.\d miles/;
    var reDirection = / [ESWN][ESWN]?[ESWN]? /;
    var reCity = /of [\w\.\s\-\,]*/;

    var text = d.Text;
    var geo = text.slice(d.Text.lastIndexOf(' ')+1).split(',');

    var json;
    try {
        json = {
        id: d.ID,
        screenName: d.ScreenName,
        postedAt: d.PostedAt,
        text: d.Text,

        magnitude: +reMagnitude.exec(text)[0].split(' ')[1],
        date: new Date(reTimestamp.exec(text)[0]),
        timezone: reTimezone.exec(text)[0],
        distance: +reDistance.exec(text)[0].split(' ')[0],
        direction: reDirection.exec(text)[0].trim(),
        city: reCity.exec(text)[0].split(' ')[1],
        lat: +geo[0],
        lon: +geo[1],
        z: +(geo[2].split('=')[1].replace('km',''))
    };
    } catch(e) {
        errors.push(text);
        console.log(e, text);
    }

    return json;
}

export default parseTweet;