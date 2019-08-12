'use strict'

document.getElementById('console-input').onchange = function(event) {
	console.log(event.target.value);
	if (event.target.value.toLowerCase().includes('getname')) {
		consoleLog(getName());
		updateDynamicTitle(getName());
	} else if (event.target.value.toLowerCase().includes('getphonenumber')) {
		consoleLog(getPhoneNumber());
	} else if (event.target.value.toLowerCase().includes('getemail')) {
		consoleLog(getEmail());
	} else if (event.target.value.toLowerCase().includes('getgithub')) {
		consoleLog(getGitHub());
	} else if (event.target.value.toLowerCase().includes('getall')) {
		consoleLog(getName());
		consoleLog(getPhoneNumber());
		consoleLog(getEmail());
		consoleLog(getGitHub());
	} else if (event.target.value.toLowerCase().includes('clear')) {
		clearLog();
	} else if (event.target.value.toLowerCase().includes('closebookcall')) {
		document.getElementById('calendly').style.display = 'none';
		document.getElementById('title-conatiner').style.display = null;
		consoleLog('- closing calendly widget');
	} else if (event.target.value.toLowerCase().includes('bookcall')) {
		document.getElementById('calendly').style.display = null;
		document.getElementById('title-conatiner').style.display = 'none';
		consoleLog(' - opening calendly widget');
		consoleLog(' - pick a time and date inside the widget');
	} else {
		consoleLog('Command not supported');
	}
	event.target.value = '';
};

document.body.onkeydown = function() {
	document.getElementById('console-input').focus();
};

function consoleLog(log) {
	let consoleLogContainer = document.getElementById('console-log');
	consoleLogContainer.appendChild(document.createElement('br'));
	if (/(https?:\/\/[^\s]+)/g.test(log)) {
		let link = document.createElement('a');
		link.innerHTML = log;
		link.href = log;
		link.target = '_blank';
		consoleLogContainer.appendChild(link);
	} else if (validateEmail(log)) {
		let link = document.createElement('a');
		link.innerHTML = log;
		link.href = `mailto:${log}`;
		link.target = '_blank';
		consoleLogContainer.appendChild(link);
	} else {
		consoleLogContainer.appendChild(document.createTextNode(log));		
	}
	console.log(log);
}

function clearLog() {
	updateDynamicTitle('Programmer');
	document.getElementById('console-log').innerHTML = '';
}

function updateDynamicTitle(title) {
	let dtitle = document.getElementById('dtitle')
	if (/(https?:\/\/[^\s]+)/g.test(title)) {
		let link = document.createElement('a');
		link.innerHTML = title;
		link.href = title;
		link.target = '_blank';
		dtitle.innerHTML = '';
		dtitle.appendChild(link);
	} else if (validateEmail(title)) {
		let link = document.createElement('a');
		link.innerHTML = title;
		link.href = `mailto:${title}`;
		link.target = '_blank';
		dtitle.innerHTML = '';
		dtitle.appendChild(link);
	} else {
		dtitle.innerHTML = title;
	}
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function getName() {
	return 'Timofey Biryukov';
}
function getPhoneNumber() {
	return '+7 (701) 233 11 42';
}

function getEmail() {
	return 'timofeybiryukov@gmail.com';
}

function getGitHub() {
	return 'https://github.com/TimofeyBiryukov';
}