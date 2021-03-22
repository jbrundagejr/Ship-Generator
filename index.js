function randomShipName(ships) {
	const index = Math.floor(Math.random() * (ships.length)),
		ship = ships[index];

	if (ship)
		return ship.name;
	else
		return 'Uh oh! Ship not found :[';
}

const body = document.querySelector('body'),
	h1 = document.createElement('h1'),
	button = document.createElement('button'),
	p = document.createElement('p');

let ships;

// page title
h1.innerText = 'Random Star Wars Ship Generator';

body.append(h1);

// CTA
button.innerText = 'GET ME A SHIP!';

button.disabled = true;

body.append(button);

// ship container
body.append(p);

// get ships
fetch('https:/swapi.dev/api/starships/')
	.then(res => res.json())
	.then(res => {
		ships = starship.results;

		if (ships && ships.length)
			button.removeAttribute('disabled');
	});

// init event listeners
button.addEventListener('click', (evt) => {
	p.innerText = randomShipName(ships);
});
