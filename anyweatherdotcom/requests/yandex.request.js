const cheerio = require('cheerio');
const axios = require('axios');

module.exports = async function(lat, long) {


    var data = []

    let weather = {
        temp: '',
        type: '',
        pressure: '',
        humidity: '',
        wind: '',
        city: ''
    };

    const url = 'https://yandex.ru/pogoda/?lat='+lat+`&lon=`+long;
    console.log("Ссылка на яндекс",url)
   
    const getHTML = async(url) => {
        const { data } = await axios.get(url)
        return cheerio.load(data)
     } 
    const selector = await getHTML(url)

 

     //какой класс взять?
    const tempGrad = selector('div.temp.fact__temp.fact__temp_size_s').find('span.temp__value.temp__value_with-unit').text()
    weather.temp = tempGrad ? tempGrad : ' ';

    const typeNow = selector('div.link__feelings').find('div.link__condition').text()
    weather.type = typeNow ? typeNow : `damn I can't find
    :(`;

    const pressureNow = selector('div.term.term_orient_v.fact__pressure').find('div.term__value').text()
    weather.pressure = pressureNow ? pressureNow : ' '

    const humidityNow = selector('div.term.term_orient_v.fact__humidity').find('div.term__value').text()
    weather.humidity = humidityNow ? humidityNow : ' '

    const windNow = selector('div.term.term_orient_v.fact__wind-speed').find('div.term__value').text()
    weather.wind = windNow ? windNow : ' '

    const nameofCity = selector('div[class="fact__title"] div[class^="header-title header-title_in-fact"] h1[class^="title title_level_1"]').text()
    weather.city = nameofCity ? nameofCity : null

    //добавили сегодня
    data.push(weather)
    //console.log(data)

    selector('ul[class="swiper-wrapper"] div[class^="forecast-briefly__day"]').each((i, elem) => {
        
        data.push({
            day: selector(elem).find('div[class="forecast-briefly__name"]').text(),
            data: selector(elem).find('time[class="time forecast-briefly__date"]').text(),
            tempDay: selector(elem).find('div[class="temp forecast-briefly__temp forecast-briefly__temp_day"] span.temp__value.temp__value_with-unit').text(),
            tempNight: selector(elem).find('div[class="temp forecast-briefly__temp forecast-briefly__temp_night"] span.temp__value.temp__value_with-unit').text()
        })
    })
    //console.log(data)
    

    try{
        //console.log(weather)
        return {
            dayofWeek1: data[2].day,
            dayofWeek2: data[3].day+':'+'\n' +data[3].data,
            dayofWeek3: data[4].day+':'+'\n' +data[4].data,
            dayofWeek4: data[5].day+':'+'\n' +data[5].data,
            dayofWeek5: data[6].day+':'+'\n' +data[6].data,
            dayofWeek6: data[7].day+':'+'\n' +data[7].data,
            dayofWeek7: data[8].day+':'+'\n' +data[8].data,
            dayofWeek8: data[9].day+':'+'\n' +data[9].data,
            tempofDay1: data[2].tempDay,
            tempofDay2: data[3].tempDay,
            tempofDay3: data[4].tempDay,
            tempofDay4: data[5].tempDay,
            tempofDay5: data[6].tempDay,
            tempofDay6: data[7].tempDay,
            tempofDay7: data[8].tempDay,
            tempofNihgt1: data[2].tempNight,
            tempofNihgt2: data[3].tempNight,
            tempofNihgt3: data[4].tempNight,
            tempofNihgt4: data[5].tempNight,
            tempofNihgt5: data[6].tempNight,
            tempofNihgt6: data[7].tempNight,
            tempofNihgt7: data[8].tempNight,
            weatherYan: data[0].temp,
            mainYan: data[0].type,
            windYan: data[0].wind,
            pressureYan: data[0].pressure,
            humidityYan: data[0].humidity,
            cityYan: data[0].city,
            lsVisibleYan: true,
            errorYan: null,
        }
    } 
    catch(error){
        //console.log(error);
        return{
            dayofWeek1: null,
            dayofWeek2: null,
            dayofWeek3: null,
            dayofWeek4: null,
            dayofWeek5: null,
            dayofWeek6: null,
            dayofWeek7: null,
            tempofDay1: null,
            tempofDay2: null,
            tempofDay3: null,
            tempofDay4: null,
            tempofDay5: null,
            tempofDay6: null,
            tempofDay7: null,
            weatherYan: data[0].temp,
            mainYan: data[0].type,
            windYan: data[0].wind,
            pressureYan: data[0].pressure,
            humidityYan: data[0].humidity,
            lsVisibleYan: false,
            errorYan: error.message,
        }
    }

}
