import { getWeatherData } from "./api.js";
import { createContent } from "./appContent.js";
import { createHeader } from "./appHeader.js";

const app = async() => {
   const weather = await getWeatherData(JSON.parse(localStorage.getItem('city')) || 'Москва'); //подставляем город, который сохранён в браузере, если такого нет, то Москва по умолчанию
   const header = createHeader(weather);
   const content = createContent(weather);
   document.body.append(header, content);
   console.log(weather);
}
app();