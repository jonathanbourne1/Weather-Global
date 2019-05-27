const axios = require('axios');

const getweather = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=11cc329ec18058efb9ca7ef11ce5074d&units=metric`)


    return resp.data.main.temp;

}

module.exports = {
    getweather
}