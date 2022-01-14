const reqProm = require('request-promise');


//асинхронный запрос в виде функци
//в экспорт попадет то что мы обозначим в данной конструкции
//city по умолчанию пустая строка
module.exports = async function(lat = '', lon = '') {
    // if (!city){
    //     throw new Error('expected new city!')
    // }
   
    //объект конфигурации для reqProm
    const keyIp = "2ba17c33a8fcc5d1778a82b34c0d0e6b";
    const uri = 'https://api.openweathermap.org/data/2.5/onecall?'
    const options = {
        uri: uri,
        qs: {
            appid: keyIp,
            lat: lat,
            lon: lon,
            exclude: 'current,minutely,hourly,alerts',
            units: 'metric'
        },
        json: true
    }
    // const data = await reqProm (options);
    //console.log(data)
    // console.log(data.daily[2].weather[0].icon)

    try{
        //отправили конфиг ждем ответа
        const data = await reqProm (options);
       // console.log(data.daily[0].temp)

        return {
            opentempofWeek1: data.daily[0].temp.day,
            opentempofWeek2: data.daily[1].temp.day,
            opentempofWeek3: data.daily[2].temp.day,
            opentempofWeek4: data.daily[3].temp.day,
            opentempofWeek5: data.daily[4].temp.day,
            opentempofWeek6: data.daily[5].temp.day,
            opentempofWeek7: data.daily[6].temp.day,
            opentempofNight1: data.daily[0].temp.night,
            opentempofNight2: data.daily[1].temp.night,
            opentempofNight3: data.daily[2].temp.night,
            opentempofNight4: data.daily[3].temp.night,
            opentempofNight5: data.daily[4].temp.night,
            opentempofNight6: data.daily[5].temp.night,
            opentempofNight7: data.daily[6].temp.night,
            timezone: data.timezone,
            openTemp: data.daily[0].temp.day.toFixed(0),
            openType: data.daily[0].weather[0].main, 
            openWind: data.daily[0].wind_speed.toFixed(1),
            openPressure: (data.daily[0].pressure/1.333).toFixed(0),
            openHumidity: data.daily[0].humidity,
            lsVisible: true,
            error: null
        }
    } 
    catch(error){
        //console.log(error);
        return{
            opentempofWeek1: null,
            opentempofWeek2: null,
            opentempofWeek3: null,
            opentempofWeek4: null,
            opentempofWeek5: null,
            opentempofWeek6: null,
            opentempofWeek7: null,
            opentempofNight1: null,
            opentempofNight2: null,
            opentempofNight3: null,
            opentempofNight4: null,
            opentempofNight5: null,
            opentempofNight6: null,
            opentempofNight7: null,
            timezone: null,
            openTemp: null,
            openType: "City not found!",
            openWind: null,
            openPressure: null,
            openHumidity: null,
            lsVisible: false,
            error: error.message
        }
    }
}
