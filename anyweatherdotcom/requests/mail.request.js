const cheerio = require('cheerio');
const axios = require('axios');
const translator = require('../tranlator')

module.exports =  async function(city='') {

    var cityEng = translator(city)

    url = `https://pogoda.mail.ru/prognoz/`+cityEng+`/`;
    urlWeek = `https://pogoda.mail.ru/prognoz/`+cityEng+`/14dney/`;
    
    console.log("Ссылка на mail.ru",url)

    try{
        const getHTML = async(url) => {
            const { data } = await axios.get(url)
            return cheerio.load(data)
        }
        var selector = await getHTML(url)

        const getHTMLWeek = async(url) => {
            const { data } = await axios.get(url)
            return cheerio.load(data)
        }
        var selectorEx = await getHTMLWeek(urlWeek)
    }
    catch{
        return{
            mailtempofDay1: null,
            mailtempofDay2: null,
            mailtempofDay3: null,
            mailtempofDay4: null,
            mailtempofDay5: null,
            mailtempofDay6: null,
            mailtempofDay7: null,
            mailtempoNight1: null,
            mailtempoNight2: null,
            mailtempoNight3: null,
            mailtempoNight4: null,
            mailtempoNight5: null,
            mailtempoNight6: null,
            mailtempoNight7: null,
            tempMailNow: null,
            typeMailNow: 'I didn’t find:(',
            pressureMailNow: null,
            humidityMailNow: null,
            windMailNow: null,
            isVisibleMail: false,
        }
    }

    //погода сейчас
    var today = []
    const tempNow = selector('div[class="information__content__additional information__content__additional_temperature"]').text()

    const typeNow = selector('div[class="information__content__additional information__content__additional_first"] div[class="information__content__additional__item"]').text()
    
    today.push({
        temp: tempNow ? parseInt(tempNow, 10) : `Haven't found:(`,
        type: typeNow ? typeNow.split("\n")[1].trim() : '',
    })
    selector('div[class="information__content__additional information__content__additional_second"] div[class="information__content__additional__item"]').each((i, elem) => {

        var item = selector(elem).find('span').text().trim().match(/\d*/)[0]
       //console.log('наш айтем ',item)
        today.push({
            other: item
        })
    })
    //массив температур
    var week = []    
    week.push({
        temp: selectorEx('div[class="day__temperature "]').text().split("°")
    })
    console.log(week)

    try{
        return {
            mailtempofDay1: week[0].temp[2],
            mailtempofDay2: week[0].temp[6],
            mailtempofDay3: week[0].temp[10],
            mailtempofDay4: week[0].temp[14],
            mailtempofDay5: week[0].temp[18],
            mailtempofDay6: week[0].temp[22],
            mailtempofDay7: week[0].temp[26],
            mailtempoNight1: week[0].temp[4],
            mailtempoNight2: week[0].temp[8],
            mailtempoNight3: week[0].temp[12],
            mailtempoNight4: week[0].temp[16],
            mailtempoNight5: week[0].temp[20],
            mailtempoNight6: week[0].temp[24],
            mailtempoNight7: week[0].temp[28],
            tempMailNow: today[0].temp,
            typeMailNow: today[0].type,
            pressureMailNow: today[1].other,
            humidityMailNow: today[2].other,
            windMailNow: today[3].other,
            isVisibleMail: true,
        }
    } 
    catch(error){
        //console.log("Ошибка:", error);
        return{
            mailtempofDay1: null,
            mailtempofDay2: null,
            mailtempofDay3: null,
            mailtempofDay4: null,
            mailtempofDay5: null,
            mailtempofDay6: null,
            mailtempofDay7: null,
            mailtempoNight1: null,
            mailtempoNight2: null,
            mailtempoNight3: null,
            mailtempoNight4: null,
            mailtempoNight5: null,
            mailtempoNight6: null,
            mailtempoNight7: null,
            tempMailNow: null,
            typeMailNow: 'I didn’t find:(',
            pressureMailNow: null,
            humidityMailNow: null,
            windMailNow: null,
            isVisibleMail: false,
        }
    }
}
