import sunny from "./icons/sunny.svg";
import night from "./icons/night.svg";
import light_cloud_day from "./icons/light_cloud_day.svg";
import light_cloud_night from "./icons/light_cloud_night.svg";
import cloudy from "./icons/cloudy.svg";
import broken_cloud from "./icons/broken_cloud.svg";
import shower from "./icons/shower.svg";
import rain from "./icons/rain.svg";
import lightning from "./icons/lightning.svg";
import snow from "./icons/snow.svg";
import mist from "./icons/mist.svg";

function getIcon(iconCode) {
  switch (iconCode) {
    case "01d":
      return sunny;
    case "01n":
      return night;
    case "02d":
      return light_cloud_day;
    case "02n":
      return light_cloud_night;
    case "03d":
    case "03n":
      return cloudy;
    case "04d":
    case "04n":
      return broken_cloud;
    case "09d":
    case "09n":
      return shower;
    case "10d":
    case "10n":
      return rain;
    case "11d":
    case "11n":
      return lightning;
    case "13d":
    case "13n":
      return snow;
    case "50d":
    case "50n":
      return mist;
    default:
      console.log(`unrecognised weather icon code: ${iconCode}`);
  }
}

export default getIcon;
