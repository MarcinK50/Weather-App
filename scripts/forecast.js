/* eslint-disable no-unused-vars */
const key = 'byiDzZcJWh4wk8QAeYClPkayXAXcl6PU';

const getForecast = async id => {
  const url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${id}?apikey=${key}&language=cs-CZ&details=true&metric=true`;
  const response = await fetch(url);
  const data = response.json();
  return data;
};

const getCurrentWeather = async id => {
  const url = `https://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${key}&language=cs&details=true`;
  const response = await fetch(url);
  const data = await response.json();
  return data[0];
};

const getCity = async city => {
  const url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${city}`;
  const response = await fetch(url);
  const data = await response.json();
  return data[0];
};

/* getCity('prague')
  .then(data => {
    console.log(data);
    return getForecast(data.Key);
  })
  .then(data => console.log(data))
  .catch(err => console.log(err)); */
