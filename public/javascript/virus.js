require('dotenv').config();

var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://covid-19-data.p.rapidapi.com/country?format=json&name=canada");
xhr.setRequestHeader("x-rapidapi-host", process.env.API_NAME_1);
xhr.setRequestHeader("x-rapidapi-key", process.env.API_KEY_1);

xhr.send(data);