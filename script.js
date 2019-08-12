'use strict'

document.getElementById('console-input').onchange = e => {
  proccessCmd(e.target.value);
  e.target.value = '';
};

document.body.onkeydown = () => document.getElementById('console-input').focus();

if (location.hash) proccessCmd(location.hash);


function proccessCmd(cmd) {
	console.log(cmd);
	if (cmd.toLowerCase().includes('getname')) {
		consoleLog(getName());
		updateDynamicTitle(getName());
	} else if (cmd.toLowerCase().includes('getphonenumber')) {
		consoleLog(getPhoneNumber());
	} else if (cmd.toLowerCase().includes('getemail')) {
		consoleLog(getEmail());
	} else if (cmd.toLowerCase().includes('getgithub')) {
		consoleLog(getGitHub());
	} else if (cmd.toLowerCase().includes('getall')) {
		consoleLog(getName());
		consoleLog(getPhoneNumber());
		consoleLog(getEmail());
		consoleLog(getGitHub());
	} else if (cmd.toLowerCase().includes('clear')) {
		clearLog();
	} else if (cmd.toLowerCase().includes('closebookcall')) {
		document.getElementById('calendly').style.display = 'none';
		document.getElementById('title-conatiner').style.display = null;
		consoleLog('- closing calendly widget');
	} else if (cmd.toLowerCase().includes('bookcall')) {
		document.getElementById('calendly').style.display = null;
		document.getElementById('title-conatiner').style.display = 'none';
		consoleLog(' - opening calendly widget');
		consoleLog(' - pick a time and date inside the widget');
	} else {
		consoleLog('Command not supported');
	}
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
  let dtitle = document.getElementById('dtitle');
  proccessCmd('closebookcall');
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