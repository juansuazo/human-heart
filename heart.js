//Definition of systolic and dyastolic presssures according to three scenarios
var normaldiastolicpressure = 80;
var normalsistolicpressure = 120;
var increaseddiastolicpressure = 100;
var increasedsistolicpressure = 140;
var decreaseddiastolipressure = 60;
var decreasedsistolicpressure = 80;
var VES = 70;
var RVPT = 0.02;


//Constructor for heart component
function HeartComponent (pressure1,pressure2) {

this.diastolicpressure = pressure1;
this.systolicpressure = pressure2;
this.heartrate = (((this.diastolicpressure + this.systolicpressure)/2)/(VES * RVPT));
};

//Definition of heart components
var leftVentricleNormal = new HeartComponent(normaldiastolicpressure,normalsistolicpressure);
var leftVentricleincreased = new HeartComponent(increaseddiastolicpressure,increasedsistolicpressure);
var leftVentricledecreased = new HeartComponent(decreaseddiastolipressure,decreasedsistolicpressure);

var rightVentricle = new HeartComponent();
var leftAtrium = new HeartComponent();
var rightAtrium = new HeartComponent();

 


//conversion of heart rate into interval.
var intervalnormal = 1/(leftVentricleNormal.heartrate / 60000);
var intervalincreased = 1/(leftVentricleincreased.heartrate / 60000);
var intervaldecreased = 1/(leftVentricledecreased.heartrate / 60000);

//function to print heart rate.
var printheartrate = function(condition) {
	if (condition == "Normal") {
	return	setInterval(function(){
			console.log("loop-doop")
		}, intervalnormal);
}
else if (condition =="Increased") {
	return	setInterval(function(){
				console.log("loop-doop")
			}, intervalincreased);
}
else {
	return	setInterval(function(){
					console.log("loop-doop")
				}, intervaldecreased);
}
};




// Call printheartrate function and select scenario in order for the heart to start beating
//printheartrate("Normal")
//printheartrate("Increased")
printheartrate("Decreased")
 

	







