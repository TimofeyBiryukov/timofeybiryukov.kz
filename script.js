'use strict'

document.getElementById('console-input').onchange = function(event) {
	console.log(event.target.value);
	if (event.target.value.toLowerCase().indexOf('getname') > -1) {
		consoleLog(getName());
		updateDynamicTitle(getName());
	} else if (event.target.value.toLowerCase().indexOf('getphonenumber') > -1) {
		consoleLog(getPhoneNumber());
	} else if (event.target.value.toLowerCase().indexOf('getemail') > -1) {
		consoleLog(getEmail());
	} else if (event.target.value.toLowerCase().indexOf('getgithub') > -1) {
		consoleLog(getGitHub());
	} else if (event.target.value.toLowerCase().indexOf('getall') > -1) {
		consoleLog(getName());
		consoleLog(getPhoneNumber());
		consoleLog(getEmail());
		consoleLog(getGitHub());
	} else if (event.target.value.toLowerCase().indexOf('clear') > -1) {
		clearLog();
	} else {
		consoleLog('Command not supported');
	}
	event.target.value = '';
};

document.body.onkeydown = function() {
	document.getElementById('console-input').focus();
}

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