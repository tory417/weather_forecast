//функция получения данных погоды
export const getWeatherData = async(city) => {
   //bf246dce1d2206898472bfcab36eac63 api key
   try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bf246dce1d2206898472bfcab36eac63&lang=ru&units=metric`);
      return await response.json();
   } catch (error) {
      console.error(error);
   }
}

/* export const getTimeInCity =  async(coord) => {
   try {
      const res = await fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=4XUHVF6YPM1Z&format=json&by=position&lat=${coord.lat}&lng=${coord.lon}`)
      return await res.json();
   } catch (error) {
      console.error(error);
   }
} */