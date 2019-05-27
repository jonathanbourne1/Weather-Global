const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        description: 'description of the city to get of the weather',
        demand: true
    }
}).argv;



const encodedUrl = encodeURI(argv.direccion);
const weather = require('./WeatherAPI/weather');
const place = require('./place/place.js');



/*place.getplacelatlng(encodedUrl)
    .then(res => {
        if (res) {
            const city = res.name;
            const lat = res.lat;
            const lng = res.lon
            console.log(city);
            console.log(lat);
            console.log(lng);



        } else {
            console.log(`no place found for ${encodedUrl}`);
        }
    })

weather.getweather(21.8799, -102.300)
    .then(resp => {
        console.log(resp);
    })
*/
const getinfo = async(encodedUrl) => {

    try {
        const coords = await place.getplacelatlng(encodedUrl)
        const temp = await weather.getweather(coords.lat, coords.lng)
        return `la temperatura de ${coords.ciudad} es de ${temp} `
    } catch (error) {
        return `place not found`
    }
}

getinfo(encodedUrl)
    .then(console.log)
    .catch(err => {
        console.log(`place not found`, err);
    })



module.exports = {
    argv
}