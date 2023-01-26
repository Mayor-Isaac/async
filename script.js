'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
// setTimeout(()=>{
//     console.log('hello');
// }, 5000)
// btn.addEventListener('click', function(){
//     console.log('hey');
// })

// API is a piece of software that can allow different softwares to communicate with other software with the goal of exchanging data and info

// AJAX - Asynchronous Javascript and XML

// AJAX calls
// 1)
const renderCountry = function(info, className = ''){
  const htmlText = `<article class="country ${className}">
<img class="country__img" src="${info.flag}" />
<div class="country__data">
  <h3 class="country__name">${info.name}</h3>
  <h4 class="country__region">${info.region}</h4>
  <p class="country__row"><span>👫</span>${(+info.population/1000000).toFixed(1)} M people</p>
  <p class="country__row"><span>🗣️</span>${info.languages[0].name}</p>
  <p class="country__row"><span>💰</span>${info.currencies[0].name}</p>
  <p class="country__row"><span>⌚</span>${info.timezones}</p>
</div>
</article>`
countriesContainer.insertAdjacentHTML('beforeend',htmlText)
countriesContainer.style.opacity = '1'}

const getCountry = function(country){
  // Making request for the main country
const request = new XMLHttpRequest()
request.open('GET', `https://restcountries.com/v2/name/${country}?fullText=true`)
request.send()
request.addEventListener('load', function(){
const [info] = JSON.parse(this.responseText)
console.log(info);
renderCountry(info)
const [neighbor] = info.borders
console.log(neighbor);
// Making request for neighboring countries
const request2 = new XMLHttpRequest()
request2.open('GET', `https://restcountries.com/v2/alpha?codes=${neighbor}`)
request2.send()
request2.addEventListener('load', function(){
  const [infoNeighbor] = JSON.parse(this.responseText)
  console.log(infoNeighbor);
  renderCountry(infoNeighbor, 'neighbour')
})
})
}
getCountry('Nigeria')
getCountry('usa')
// getCountry('ghana')
// getCountry('uk')

// fetch()















