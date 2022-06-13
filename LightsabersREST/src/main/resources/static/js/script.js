window.addEventListener('load', function(e) {
	console.log('script loaded');
	init(e);
	listAll();
});


function init(e) {
	console.log('in init');
	document.lightsaberForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		let lightsaberId = document.lightsaberForm.lightsaberId.value;
		if (!isNaN(lightsaberId) && lightsaberId > 0) {
			getLightsaber(lightsaberId, e);
		}

	})
	document.lightsaberFormAdd.addLightsaber.addEventListener('click', createLightsaber);

	document.body.addEventListener('click', function(event) {

		let clicked = event.target.id;
		let id = clicked.substr(5);
			
		
		if (clicked.includes('lstr') ) {
			
	
			getLightsaber(id, e)
		};
	});
}


function agg(lightsabers) {
	let darkVic = 0;
	let darkBat = 0;
	let darkUser = 0;
	let lightVic = 0;
	let lightBat = 0;
	let lightUser = 0;
	let unVic = 0;
	let unBat = 0;
	let unUser = 0;
	
	
	
	for(let ls of lightsabers){
		
		if(ls.alignment === 'light' || ls.alignment === 'Light'){
		lightUser++;
		lightBat += ls.battles;
		lightVic += ls.wins;
		} else if (ls.alignment === 'dark' || ls.alignment === 'Dark') {
		darkUser++;
		darkBat += ls.battles;
		darkVic += ls.wins;
		} else {
		unUser++;
		unBat += ls.battles;
		unVic += ls.wins;
		}
		
	}
	let lightPer = (lightVic / lightBat) * 100;
	let darkPer = (darkVic / darkBat) * 100;
	let unPer = (unVic / unBat) * 100;
	
	let dataDiv = document.getElementById('agg');
	dataDiv.textContent = '';
	let h2 = document.createElement('h2');
	h2.textContent = 'The lightside Lightsabers have a ' + lightPer + '% win rate out of ' + lightBat + ' battles.';
	dataDiv.appendChild(h2);
	h2 = document.createElement('h2');
	h2.textContent = 'The darkside Lightsabers have a ' + darkPer + '% win rate out of ' + darkBat + ' battles.';
	dataDiv.appendChild(h2);
	h2 = document.createElement('h2');
	h2.textContent = 'The unaligned Lightsabers have a ' + unPer + '% win rate out of ' + unBat + ' battles.';
	dataDiv.appendChild(h2);
}



function deleteLightsaber(lightsaberId) {
	console.log('in list all')
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/lightsabers/' + lightsaberId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 && xhr.responseText) {
				location.reload();
			}
		}
	}
	xhr.send();
}

function sendUpdateLightsaber(lightsaber) {
	let xhr = new XMLHttpRequest();
	xhr.open('put', 'api/lightsabers/' + lightsaber.id);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 && xhr.responseText) {
				
				getLightsaber(lightsaber.id);
				setTimeout(() => { location.reload(); }, 3000);
			}
		}
	}
	xhr.setRequestHeader('Content-type', 'application/json')
	xhr.send(JSON.stringify(lightsaber));
}


function listAll() {
	console.log('in list all')
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/lightsabers');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {

			if (xhr.status === 200 && xhr.responseText) {
				let lightsabers = JSON.parse(xhr.responseText);
				console.log(lightsabers);
				displayAllLightsabers(lightsabers);
				agg(lightsabers);
			}
		}
	}
	xhr.send();
}

function displayAllLightsabers(lightsabers) {

	let dataTable = document.getElementById('lightsabersTable');


	console.log(dataTable)
	for (let ls of lightsabers) {
		let tr = document.createElement('tr')
		let td = document.createElement('td')
		td.textContent = ls.owner;
		td.setAttribute('id', "lstr_" + ls.id);
		td.setAttribute('name', ls.id);
		tr.appendChild(td);
		td = document.createElement('td')
		td.textContent = ls.color;
				td.setAttribute('id', "lstr_" + ls.id);
		td.setAttribute('value', ls.id);
		tr.appendChild(td);
		td = document.createElement('td')
		td.textContent = ls.length;
				td.setAttribute('id', "lstr_" + ls.id);
		td.setAttribute('value', ls.id);
		tr.appendChild(td);
		td = document.createElement('td')
		td.textContent = ls.alignment;
				td.setAttribute('id', "lstr_" + ls.id);
		td.setAttribute('value', ls.id);
		tr.appendChild(td);
		td = document.createElement('td')
		td.textContent = ls.destroyed;
				td.setAttribute('id', "lstr_" + ls.id);
		td.setAttribute('value', ls.id);
		tr.appendChild(td);
		td = document.createElement('td')
		td.textContent = ls.battles;
				td.setAttribute('id', "lstr_" + ls.id);
		td.setAttribute('value', ls.id);
		tr.appendChild(td);
		td = document.createElement('td')
		td.textContent = ls.wins;
				td.setAttribute('id', "lstr_" + ls.id);
		td.setAttribute('value', ls.id);
		tr.appendChild(td);
		tr.setAttribute('id', "lstr_" + ls.id);
		tr.setAttribute('value', ls.id);
		console.log(tr);
		dataTable.appendChild(tr);
	}
}

function addLightsaberToTable(ls) {

	let dataTable = document.getElementById('lightsabersTable');
	let tr = document.createElement('tr')
	let td = document.createElement('td')
	td.textContent = ls.owner;
	tr.appendChild(td);
	td = document.createElement('td')
	td.textContent = ls.color;
	tr.appendChild(td);
	td = document.createElement('td')
	td.textContent = ls.length;
	tr.appendChild(td);
	td = document.createElement('td')
	td.textContent = ls.alignment;
	tr.appendChild(td);
	td = document.createElement('td')
	td.textContent = ls.destroyed;
	tr.appendChild(td);
	td = document.createElement('td')
	td.textContent = ls.battles;
	tr.appendChild(td);
	td = document.createElement('td')
	td.textContent = ls.wins;
	tr.appendChild(td);
	tr.setAttribute('id', "lstr")

	dataTable.appendChild(tr);
}



function getLightsaber(lightsaberId) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/lightsabers/' + lightsaberId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let lightsaber = JSON.parse(xhr.responseText);
				display(lightsaber);
			}
		}
	};
	xhr.send();
}

function createLightsaber(event) {
	event.preventDefault();
	let form = document.lightsaberFormAdd;
	let newLightsaber = {
		owner: form.user.value,
		color: form.color.value,
		length: form.length.value,
		alignment: form.alignment.value,
		battles: form.battles.value,
		wins: form.wins.value,
		destroyed: false
	};
	sendNewLightsaber(newLightsaber);
}

function sendNewLightsaber(newLightsaber) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/lightsabers');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let lightsaber = JSON.parse(xhr.responseText);
				display(lightsaber);
				addLightsaberToTable(lightsaber);
			}
		}
	}
	xhr.setRequestHeader('Content-type', 'application/json')
	xhr.send(JSON.stringify(newLightsaber));
}


function display(lightsaber, e) {
	let dataDiv = document.getElementById('lightsaberData');
	dataDiv.textContent = '';
	let h1 = document.createElement('h3');
	h1.textContent = lightsaber.owner + "'s Lightsaber:";
	dataDiv.appendChild(h1);
	let form = document.createElement('form');
	form.name = 'lightsaberFormUpdate'
	dataDiv.appendChild(form)
	//put the title in bold

	let div = document.createElement('div');
	div.textContent = 'ID: ';
	let input = document.createElement('input');
	input.type = 'number';
	input.value = lightsaber.id;
	input.name = 'id';
	input.readOnly = true;
	div.appendChild(input)
	form.appendChild(div);

	div = document.createElement('div');
	div.textContent = 'Owner: ';
	input = document.createElement('input');
	input.type = 'text';
	input.value = lightsaber.owner;
	input.name = 'owner';
	div.appendChild(input)
	form.appendChild(div);

	div = document.createElement('div');
	div.textContent = 'Color: ';
	input = document.createElement('input');
	input.type = 'text';
	input.value = lightsaber.color;
	input.name = 'color';
	div.appendChild(input)
	form.appendChild(div);

	div = document.createElement('div');
	div.textContent = 'Length: ';
	input = document.createElement('input');
	input.type = 'number';
	input.value = lightsaber.length;
	input.name = 'length';
	div.appendChild(input)
	form.appendChild(div);

	div = document.createElement('div');
	div.textContent = 'Alignment: ';
	input = document.createElement('input');
	input.type = 'text';
	input.value = lightsaber.alignment;
	input.name = 'alignment';
	div.appendChild(input)
	form.appendChild(div);

	div = document.createElement('div');
	div.textContent = 'Battles: ';
	input = document.createElement('input');
	input.type = 'number';
	input.value = lightsaber.battles;
	input.name = 'battles';
	div.appendChild(input)
	form.appendChild(div);

	div = document.createElement('div');
	div.textContent = 'Wins: ';
	input = document.createElement('input');
	input.type = 'number';
	input.value = lightsaber.wins;
	input.name = 'wins';
	div.appendChild(input)
	form.appendChild(div);
	
	div = document.createElement('div');
	div.textContent = 'Destroyed: ';
	input = document.createElement('input');
	input.type = 'checkbox';
	if (lightsaber.destroyed === true) {
		input.checked = true;
	}
	input.name = 'destroyed';
	div.appendChild(input)
	form.appendChild(div);

	let updateButton = document.createElement('button');
	updateButton.name = 'updateLightsaber';
	updateButton.textContent = 'Update this Lightsaber';
	updateButton.setAttribute('id', 'updateLightsaber');
	form.appendChild(updateButton);

	let deleteButton = document.createElement('button');
	deleteButton.value = lightsaber.id;
	deleteButton.textContent = 'Delete this Lightsaber';
	deleteButton.setAttribute('id', 'deleteLightsaber');
	dataDiv.appendChild(deleteButton);

	document.body.addEventListener('click', function(event) {
		console.log('clicked')
		if (event.target.id == 'deleteLightsaber') {
			console.log('clicked dl')
			deleteLightsaber(lightsaber.id)
		};
	});
	document.body.addEventListener('click', function(event) {
		console.log('clicked')
		if (event.target.id == 'updateLightsaber') {
			console.log('clicked up')
			updateLightsaber(event)
		};
	});


}
function updateLightsaber(event) {
	event.preventDefault();
	let form = document.lightsaberFormUpdate;
	let updatedLightsaber = {
		id: form.id.value,
		owner: form.owner.value,
		color: form.color.value,
		length: form.length.value,
		alignment: form.alignment.value,
		battles: form.battles.value,
		wins: form.wins.value,
		destroyed: false
	};
	console.log(updatedLightsaber);
	sendUpdateLightsaber(updatedLightsaber);
}
