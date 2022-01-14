const reqProm = require('request-promise');

  module.exports = async(city) => {
    const keyIp = "dc0a0408-1d19-462d-ad4c-6b6e8324c657";
    var uri = 'https://geocode-maps.yandex.ru/1.x/?format=json&apikey=dc0a0408-1d19-462d-ad4c-6b6e8324c657&geocode='+city
      const options = {
          uri: uri,
          qs: {
              appid: keyIp,
              units: 'imperial'
          },
          json: true,

      }

    const data = await reqProm (options);
    //console.log(data)
    try{
      var info = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point
      var point = info.pos.split(' ')
      return {
        lat: point[1],
        long: point[0]
      }
    }
    catch{
      return {
        lat: null,
        long: null
      }
    }
  } 
     