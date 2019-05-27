const axios = require('axios');
const argv = require('../app').argv;


const getplacelatlng = async(dir) => {

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${dir}`,
        headers: { 'X-RapidAPI-Key': 'd2b757de0cmsh860be101ff4275fp15759bjsn06378aa5361d' }
    });

    const resp = await instance.get()
    const resp1 = resp.data.Results[0];
    const ciudad = resp1.name
    const lat = resp1.lat
    const lng = resp1.lon
        // console.log({ ciudad, lat, lng })
    return { ciudad, lat, lng }





}

module.exports = {
    getplacelatlng

}