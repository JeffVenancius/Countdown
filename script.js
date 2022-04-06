const finishLine = {day: 28, hour: 22, minutes: 30, seconds: 60}

seconds();minutes();hours();days()
setInterval(seconds, 1000);

function seconds(){
	let currentPeriod = new Date();
	const seconds = document.querySelector('#seconds h3')
	let currentSeconds = currentPeriod.getSeconds();
	seconds.innerHTML =  (60 - currentSeconds) - (60 - finishLine.seconds);
	if (currentSeconds == 0 || currentSeconds == 60){minutes()}
}

function minutes(){
	let currentPeriod = new Date();
	const minutes = document.querySelector('#minutes h3')
	let currentMinutes = currentPeriod.getMinutes();
	minutes.innerHTML = (60 - currentMinutes) - (60 - finishLine.minutes)
	if (currentMinutes == 0 || currentMinutes == 60){hours()}}

function hours(){
	let currentPeriod = new Date();
	const hours = document.querySelector('#hours h3')
	let currentHour = currentPeriod.getHours();
	hours.innerHTML =  (60 - currentHour) - (60 - finishLine.hour)
	if (currentHour == 0 || currentHour == 24){days()}}

function days(){
	let currentPeriod = new Date();
	const days = document.querySelector('#days h3')
	let currentDay = currentPeriod.getDate();
	days.innerHTML = finishLine.day - currentDay 
}
