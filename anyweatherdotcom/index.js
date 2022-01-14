const express = require('express');
const expressip = require('express-ip');
const bodyParser = require('body-parser');
const hbs = require("hbs");
const cookieParser = require('cookie-parser')
const weatherRequest = require('./requests/weather.request')
const yanInfo = require('./requests/yandex.request');
var home = require('./home')
const mysql = require("mysql2");
var yanCoord = require('./getCoord')
// const rpInfo = require('./rp5')
const detranslator = require('./detranslator')
const mailInfo = require('./requests/mail.request')

const connection = mysql.createConnection({
    host: "95.213.236.125",
    user: "user",
    database: "cities",
    password: "pass"
})

connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });

const host = '192.168.100.151';
const port = 3000;

const app = express();
// fs = require('fs')

app.use(express.json())
//движок view engine написан на ejs
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + "/views/partials");


//доп опции, путь к статической папке
app.use(express.static('public'));

//ЧТОБЫ В REC.BODY появились какие-нибудь данные
app.use(bodyParser.urlencoded({extended: true}))
//поиск ip
app.use(expressip().getIpInfoMiddleware);
//Работа с куки
app.use(cookieParser('secret key'))


//get форма, стартует при первом запуске
//основная стартовая стр
app.use('/', home)
//
//забацать диограмму!!!!!!
//
app.post('/', async (req, res)=>{
    //ВЫЦЕПЛЕННОЕ ЗНАЧЕНИЕ ВВЕДЕННОГО ГОРОДА
    //обращаемся к функции weather.request
    if(!req.body) return res.sendStatus(400);
    var {city} = req.body;
    var cityLower = city.toLocaleLowerCase()
    // var cityEng = detranslator(cityLower, false)
    // outputCity = cityEng[0].toUpperCase() + cityEng.substring(1)

    connection.query(`SELECT * FROM mytable1 WHERE nameOfCity = '${cityLower}'`, async function(err, results) {

        if(err) console.log(err);

        var item ={ 
            name: '',
            lat: '',
            long: ''
        };

        function change(item, lat = '', long = ''){
            item.lat = lat
            item.long = long
        }

 
        if (results.length > 0) 
        {
            console.log("Нашли город в базе")
                var lat = results[0].latitude
                var long = results[0].longitude
                change(item, lat, long)

                var accessCount = results[0].accessCount + 1

                //колличество обращений
                connection.query(`UPDATE mytable1 SET accessCount = ${accessCount}, dateUpdate = NOW() WHERE nameOfCity = '${cityLower}'` , (err, results) => {
                    if (err) console.log(err)
                    console.log("обновили accessCount!")
                })
        }


        //если города раньше не было в базе
        else {

            //с яндекс API
            var {lat, long} = await yanCoord(cityLower)
            console.log("Получили с яндекс IP",lat, long)
            change(item, lat, long)
            
            connection.query(`INSERT INTO mytable1(nameOfCity, latitude, longitude, dateCreate, dateUpdate, accessCount) VALUES('${city}', ${lat}, ${long}, NOW(), NOW(), 0)`, (err, results) => {
                if (err) console.log(err)
                console.log("Внесли в базу в пост запросе!")
            })
        }

        res.cookie('city', cityLower)
        res.cookie('lat', item.lat)
        res.cookie('long', item.long)

        var lat = item.lat
        var long = item.long
        //достаем нужные значения
        const {opentempofWeek1,opentempofWeek2,opentempofWeek3,opentempofWeek4,opentempofWeek5,opentempofWeek6,opentempofWeek7,opentempofNight1,opentempofNight2,opentempofNight3,opentempofNight4,opentempofNight5,opentempofNight6,opentempofNight7,timezone,openTemp,openType,openWind,openPressure,openHumidity,lsVisible,error} = await weatherRequest(lat, long);

        const {dayofWeek1,dayofWeek2,dayofWeek3,dayofWeek4,dayofWeek5,dayofWeek6,dayofWeek7,dayofWeek8,tempofDay1,tempofDay2,tempofDay3,tempofDay4,tempofDay5,tempofDay6,tempofDay7,tempofNihgt1,tempofNihgt2,tempofNihgt3,tempofNihgt4,tempofNihgt5,tempofNihgt6,tempofNihgt7,weatherYan,mainYan,windYan,pressureYan,humidityYan,lsVisibleYan,cityYan,errorYan} = await yanInfo(lat, long)

        const {mailtempofDay1,mailtempofDay2,mailtempofDay3,mailtempofDay4,mailtempofDay5,mailtempofDay6,mailtempofDay7,mailtempoNight1,mailtempoNight2,mailtempoNight3,mailtempoNight4,mailtempoNight5,mailtempoNight6,mailtempoNight7,tempMailNow,typeMailNow,pressureMailNow,humidityMailNow,windMailNow,isVisibleMail} = await mailInfo(cityLower)


        var citytoRender = cityYan ? cityYan : cityCookie

        res.render('templateEn', {citytoRender,opentempofWeek1,opentempofWeek2,opentempofWeek3,opentempofWeek4,opentempofWeek5,opentempofWeek6,opentempofWeek7,opentempofNight1,opentempofNight2,opentempofNight3,opentempofNight4,opentempofNight5,opentempofNight6,opentempofNight7,timezone,openTemp,openType,openWind,openPressure,openHumidity,lsVisible,error,weatherYan,mainYan,windYan,pressureYan,humidityYan,lsVisibleYan,errorYan,tempofDay1,tempofDay2,tempofDay3,tempofDay4,tempofDay5,tempofDay6,tempofDay7,tempofNihgt1,tempofNihgt2,tempofNihgt3,tempofNihgt4,tempofNihgt5,tempofNihgt6,tempofNihgt7,dayofWeek1,dayofWeek2,dayofWeek3,dayofWeek4,dayofWeek5,dayofWeek6,dayofWeek7,dayofWeek8,mailtempofDay1,mailtempofDay2,mailtempofDay3,mailtempofDay4,mailtempofDay5,mailtempofDay6,mailtempofDay7,mailtempoNight1,mailtempoNight2,mailtempoNight3,mailtempoNight4,mailtempoNight5,mailtempoNight6,mailtempoNight7,tempMailNow,typeMailNow,pressureMailNow,humidityMailNow,windMailNow,isVisibleMail})
    })
    
    
});


app.listen(port, host, ()=>{
    console.log(`Server listens http://${host}:${port}`)
});
