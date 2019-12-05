const BASE_URL = "https://zagster-service.herokuapp.com"
const PI =3.14159

//jQuery command. Wait until web page page loads call function
//Whose name is in parentheses
//function call means run the code
//$(greeter)

//call function add (use it - make it run)
add(2,3);
//greeter is the function identifier. name is the functions 
//argument (info it needs to do its job)
function add(num1, num2){
  answer= num1 + num2;
  console.log("The answer is: "+answer );
  return answer;
}
function greeter(name){
  alert("Welcome to " + name + " data visualization")
}

greeter("Ryan Earl's")


var person = {name: "Ryan", age: 19, car: {model: "Subaru", year: 2014}} 
console.log ("My name is " + person.name)
console.log ("My age is " + person.age)
console.log ("My car model is " + person.car.model)

var data = {"2016":[{"9":220},{"10":141},{"11":89},{"12":16}]}
var year_list = data[2016]
console.log('year list is ' + year_list) //will show as 4 objects

function perYear(data) {

  //[{"9":220},{"10":141},{"11":89},{"12":16}]}
  for (var index = 0, month= 9; index <= 3, month<=12; ++index, ++month){
    months2016.push(data[2016] [index] [month])
  }
  console.log("2016 data by months is easy" + months2016)

  for (var index = 0, month= 1; index <=11, month<=12; ++index, ++month){
    months2017.push(data[2017] [index] [month])
  }
  console.log("2017 data by months is easy" + months2017)

  for (var index = 0, month= 1; index <=data.length, month <= 10; ++index, ++month){
    months2018.push(data[2018] [index] [month])
  }
  console.log("2018 data by months is easy" + months2018)

}
console.log(year_list [0][9])
console.log(year_list [1][10])
console.log(year_list [2][11])
console.log(year_list [3][12])

//Arrays to hold data points pulled from JQUERY
let years = []
let months2016 []
let months2017 []
let months2018 [] 

//define or implement a function
function updateView() {
  $.getJSON(BASE_URL + "/rides/count" , updateRideCount)

  $.when ($.getJSON(BASE_URL + "/rides/count/per_month", perYear),
  ).then(updateChart);
}

if (person.age < 37){
  alert("You Millennials are so lazy")
}
if (person.age > 53){
  alert("OK Boomer!")
}
$(updateGraph)

function updateView() {
    alert("You are my guest and I am therefore in your service")
}
function updateView() {
  $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
}
function updateView2() {
  $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
}
function updateRideCount(data) {
  numberOfRides = data.count
  $("h2#rideCount").html(numberOfRides)
  alert(numberofRides = data.count);
  console.log(numberofRides)
}
function updateGraph() {
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});
}
//You are my guest and I am therefore in your service
//I am honored, but I have worked a lifetime to be free of servitude.
//Thank you for bringing peace to my valley
//good luck with the child; may it survive and bring you a handsome reward
//I have spoken
//https://hoboson02.github.io/zagster-client/