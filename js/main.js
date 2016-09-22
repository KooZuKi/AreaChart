var listArray = [ 200, 175, 150, 125, 100, 75, 50 ];

// Area Chart 
Morris.Area({
	element : 'weatherDataChart',

	data : [

		{
			"period" : "2016-09-20",
			"temA" : 330,
			"temAB" : 70
		},
		{
			"period" : "2016-09-19",
			"temA" : 330,
			"temAB" : 50
		},
		{
			"period" : "2016-09-18",
			"temA" : 300,
			"temAB" : 187
		},
		{
			"period" : "2016-09-17",
			"temA" : 300,
			"temAB" : 129
		},
		{
			"period" : "2016-09-16",
			"temA" : 220,
			"temAB" : 110
		},
		{
			"period" : "2016-09-15",
			"temA" : 250,
			"temAB" : 124
		},
		{
			"period" : "2016-09-14",
			"temA" : 250,
			"temAB" : 100
		},
		{
			"period" : "2016-09-13",
			"temA" : 250,
			"temAB" : 50
		},
		{
			"period" : "2016-09-12",
			"temA" : 170,
			"temAB" : 40
		},
		{
			"period" : "2016-09-11",
			"temA" : 190,
			"temAB" : 30
		},
		{
			"period" : "2016-09-10",
			"temA" : 190,
			"temAB" : null
		},
		{
			"period" : "2016-09-09",
			"temA" : 190,
			"temAB" : null
		},
		{
			"period" : "2016-09-08",
			"temA" : 190,
			"temAB" : null
		},
		{
			"period" : "2016-09-07",
			"temA" : 190,
			"temAB" : null
		},
		{
			"period" : "2016-09-06",
			"temA" : 190,
			"temAB" : 160
		},
		{
			"period" : "2016-09-05",
			"temA" : 170,
			"temAB" : 170
		},
		{
			"period" : "2016-09-04",
			"temA" : 180,
			"temAB" : 170
		},
		{
			"period" : "2016-09-03",
			"temA" : 180,
			"temAB" : 180
		},
		{
			"period" : "2016-09-02",
			"temA" : 180,
			"temAB" : 185
		},
		{
			"period" : "2016-09-01",
			"temA" : 180,
			"temAB" : 185
		}
	],

	xkey : 'period',
	ykeys : [ 'temA', 'temAB' ],
	stacked : true,
	labels : [ 'Series A', 'Series B' ],
	hideHover : 'auto',
	behaveLikeLine : true,
	resize : true,
	grid : false,
	lineColors : [ '#aa5191', '#6b74bf' ],
	line : false,
});
// END Area Chart 

// Calendar function
var Cal = function(CalId) {

	//Store div id
	this.CalId = CalId;

	// Months, stating on January
	this.Months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'SeptemAber', 'October', 'November', 'December' ];

	// Set the current month, year
	var d = new Date();
	this.currMonth = d.getMonth();
	this.currYear = d.getFullYear();
	

};

    // Goes to next month
	Cal.prototype.nextMonth = function() {
		if (this.currMonth == 11) {
			this.currMonth = 0;
			this.currYear = this.currYear + 1;
		} else {
			this.currMonth = this.currMonth + 1;
		}
		this.showcurr();
	};

	// Goes to previous month
	Cal.prototype.previousMonth = function() {
		if (this.currMonth == 0) {
			this.currMonth = 11;
			this.currYear = this.currYear - 1;
		} else {
			this.currMonth = this.currMonth - 1;
		}
		this.showcurr();
	};

	// Show current month
	Cal.prototype.showcurr = function() {
		this.showMonth(this.currYear, this.currMonth);
	};


	// Show month (year, month)
	Cal.prototype.showMonth = function(y, m) {

		var html = '<table>';

		// Write selected month and year
		html += '<thead><tr>';
		html += '<td colspan="7">' + this.Months[m] + ' ' + y + '</td>';
		html += '</tr></thead>';


		// Closes table
		html += '</table>';

		// Write HTML to the div
		document.getElementById(this.CalId).innerHTML = html;
	};

	// Initialize Window ONLOAD
	window.onload = function() {

	// Start calendar
	var c = new Cal("divCal");
	c.showcurr();

	// Bind previous and the next Buttons with function getId
	getId('btnNext').onclick = function() {
		c.nextMonth();
	};
	getId('btnPrev').onclick = function() {
		c.previousMonth();
	};

	//Initial weather data in Y axis
	convertTem();
	changeYAxisData(listArray);

	}
	// END Initialize Window ONLOAD

	// Get element by id
	function getId(id) {
		return document.getElementById(id);
	}
	// END binding buttons


function convertTem() {
	var convertBtn = document.getElementById('convert');
	convertBtn.addEventListener('click', myfunction);
}

function myfunction() {
	$('ul.y-axis').toggleClass('celcius');
	$('ul.y-axis').toggleClass('fahrenheit');
	if ($('ul.y-axis').hasClass('fahrenheit')) {
		setCelcius();
	} else {
		setFahrenheit();
	}
}

function setCelcius() {
	var celciusList = new Array(listArray.length);
	for (i = 0; i < listArray.length; i++) {
		celciusList[i] = Math.round((listArray[i] - 32) * 5 / 9);
	}
	console.log(celciusList);
	changeYAxisData(celciusList);

}
;


function setFahrenheit() {
	changeYAxisData(listArray);
}
;

for (i = 0; i < listArray.length; i++) {
	var temAp = listArray[i];
}

function changeYAxisData(list) {
	var ul = document.getElementById('weatherDataList');
	while (ul.hasChildNodes()) {
		ul.removeChild(ul.lastChild);
	}

	for (i = 0; i < list.length; i++) {
		var appendli = document.createElement('li');
		appendli.innerHTML = list[i];
		ul.appendChild(appendli);
	}

}