const finishLine = {days: 28, hours: 22, minutes: 30, seconds: 60}

timeUpdate(); timeUpdate('minutes'); timeUpdate('hours'); timeUpdate('days');
setInterval(timeUpdate, 1000);

function timeUpdate(selector = 'seconds'){
	const select = document.querySelector('#' + selector + ' ' +'h3');
	let currentPeriod = new Date();
	let getTime;
	let finishTime;

	switch (selector[0]) {
		case 's':
			getTime = currentPeriod.getSeconds();
			finishTime = finishLine.seconds;
			break;
		case 'm':
			getTime = currentPeriod.getMinutes();
			finishTime = finishLine.minutes;
			break;
		case 'h':
			getTime = currentPeriod.getHours();
			finishTime = finishLine.hours;
			break;
		case 'd':
			getTime = currentPeriod.getDate();
			finishTime = finishLine.days;
			break;
	}
	
	let last = getTime - finishTime;
	if (last < 0) {last = finishTime - getTime};
	select.innerHTML =  String(last).padStart(2,'0');

	if (getTime == 0) {
		switch (selector[0]) {
			case 's':timeUpdate('minutes'); break;
			case 'm':timeUpdate('hours'); break;
			case 'h':timeUpdate('days'); break;
		}
	}
}

