//
// 定義
//
const url = "https://weather.tsukumijima.net/api/forecast/city/";
const imagesOfWeather = {
  sun: "weather_sun.svg",
  rain: "weather_rain.svg",
  sun_cloud: "weather_sun_cloud.svg",
  cloud: "weather_cloud.svg",
};
const place = document.getElementById("place");
const futureDates = document.getElementById("futureDates");
const today = document.getElementById("today");

let DATA;

//
// 関数
//
const getWeatherEvent = async () => {
  const placeNumber = document.getElementById("place").value;
  const result = await fetch(`${url}${placeNumber}`);
  const json = await result.json();
  DATA = json;
  renderData();
};

// 日にちから曜日を計算
const formatDateToWeekdays = (date) => {
  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
  const formatDate = new Date(date);
  const toNumber = formatDate.getDay();
  return weekdays[toNumber];
};

// 風速の部分を必要フォーマットに整形
const formatWindow = (data) => {
  let formated;
  if (data === null) {
    // 取得できなかったら
    formated = "取得失敗";
  } else {
    // 取得できたら
    const sliced = data.replace("メートル", "");
    formated = `${sliced.toLowerCase()}m`;
  }

  return formated;
};

// 曇時々雨
const setWeatherImage = (weather) => {
  let src;

  switch (weather) {
    case "晴れ":
      src = imagesOfWeather.sun;
      break;

    case "曇り":
      src = imagesOfWeather.cloud;
      break;

    case "雨":
    case "曇一時雨":
    case "曇時々雨":
      src = imagesOfWeather.rain;
      break;

    // 何にも該当しない時
    default:
      src = imagesOfWeather.sun;
  }

  return src;
};

const renderData = () => {
  // todayとfutureの中身（HTML）を一度削除
  today.innerHTML = "";
  futureDates.innerHTML = "";

  DATA.forecasts.forEach((data) => {
    console.log(data);

    // 今日の場合処理
    if (data.dateLabel === "今日") {
      const dom = `
        <div class="border border-black rounded flex items-center justify-between mb-2">
        <div class="w-1/2">
        <div class="max-w-[125px] mx-auto">
        <img src="./assets/images/${setWeatherImage(data.telop)}" alt="${data.telop}" />
        </div>
        </div>

        <div class="w-1/2 py-4 pl-[34px]">
        <div>
        <div class="flex items-start">
        ${
          data.temperature.max.celsius
            ? `
        <span class="text-[72px] font-light font-roboto leading-none">${data.temperature.max.celsius}</span>
        <span class="font-bold text-2xl">°C</span>
        `
            : `
        <span class="text-base font-light font-roboto leading-none">取得失敗</span>
        `
        }
        </div>
        <div class="text-gray1 font-bold text-base">
        <div><span class="min-w-[4em] inline-block">最低気温</span> : <span>${data.temperature.min.celsius ? `${data.temperature.min.celsius}°C` : "取得失敗"}</span></div>
        <div><span class="min-w-[4em] inline-block">天気</span> : <span>${data.telop}</span></div>
        <div><span class="min-w-[4em] inline-block">風速</span> : <span>${formatWindow(data.detail.wave)}</span></div>
        </div>
        </div>
        </div>
        </div>
        `;

      today.insertAdjacentHTML("beforeend", dom);
    }

    // 明日、明後日の場合処理
    if (data.dateLabel !== "今日") {
      const dom = `
        <div class="pt-3 px-10 pb-4 border border-black rounded w-1/2">
        <div class="text-center text-[24px] mb-2.5">${formatDateToWeekdays(data.date)}</div>
        <div class="max-w-[90px] min-h-[88px] mx-auto mb-2.5"><img src="./assets/images/${setWeatherImage(data.telop)}" alt="${data.telop}" /></div>
        <div class="flex justify-between">
        <div class="flex items-start leading-none">
        ${
          data.temperature.max.celsius
            ? `<span class="font-roboto font-bold text-2xl">${data.temperature.max.celsius}</span><span class="font-bold text-sm text-gray1">°C</span>`
            : `<span class="font-roboto font-bold text-base">取得失敗</span>`
        }
        </div>
        <div class="flex items-start leading-none text-gray1">
        ${
          data.temperature.min.celsius
            ? `
        <span class="font-roboto font-bold text-2xl">${data.temperature.min.celsius}</span>
        <span class="font-bold text-sm text-gray1">°C</span>

        `
            : `
        <span class="font-roboto font-bold text-base">取得失敗</span>

        `
        }
        </div>
        </div>
        </div> 
        `;

      futureDates.insertAdjacentHTML("beforeend", dom);
    }
  });
};

//
// イベント付与
//
place.addEventListener("change", (e) => {
  getWeatherEvent();
});

//
// 初期レンダリング
//
getWeatherEvent();
