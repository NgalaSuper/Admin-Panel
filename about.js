

let list  = document.querySelectorAll('.navigation li');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('hovered'));
    this.classList.add('hovered');
}
list.forEach((item)=>
item.addEventListener('mouseover',activeLink));


function changeColor(element) {
    var list = document.getElementsByTagName("li");
    for (var i = 0; i < list.length; i++) {
      list[i].style.background = "#425C5A";
    }
    element.style.background = "#273E3C";
}
  

function showSection(dashboardSection) {
    // Get the element to show
    var section = document.getElementById(dashboardSection);
    section.style.display = 'block';
  
    // Get all other elements with the class "section"
    var otherSections = document.querySelectorAll('.section');
  
    // Set the display property of all other elements to "none"
    for (var i = 0; i < otherSections.length; i++) {
      if (otherSections[i] !== section) {
        otherSections[i].style.display = 'none';
      }
    }
  }
  function showSection(flightSection) {
    // Get the element to show
    var section = document.getElementById(flightSection);
    section.style.display = 'block';
  
    // Get all other elements with the class "section"
    var otherSections = document.querySelectorAll('.section');
  
    // Set the display property of all other elements to "none"
    for (var i = 0; i < otherSections.length; i++) {
      if (otherSections[i] !== section) {
        otherSections[i].style.display = 'none';
      }
    }
  }

 
  
  
  

var xValues = ["Dusseldorf", "Basel", "Munich", "Genev", "Prishtina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["red", "red","red","red","red"];

new Chart("myChart1", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      responsive:true,
      text: "Statistics"
    }
  }
});


var xValues = [50,60,70,80,90];
var yValues = [7,8,8,9,9,9,10,11,14,14,15];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
        xAxes:[{ticks:{min:10, max:20}}],
      yAxes: [{ticks: {min: 10, max:20}}],
    }
  }
});


var xValues = ["Dusseldorf", "Basel"];
var yValues = [55, 49];
var barColors = [
  "#3D5654",
  "#D1D3D4"
];

new Chart("myChart2", {
    type: "doughnut",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        responsive:true,
        text: "World Wide Wine Production 2018"
      }
    }
  });

  var _URL = window.URL || window.webkitURL;

$("#file").change(function(e) {
    var image, file;
    if ((file = this.files[0])) {
        image = new Image();
        image.onload = function() {
				src = this.src;
        $('#uploadimagespreview').html('<img src="'+ src +'"></div>');
        $('#uploadimagespreview1').html('<img src="'+ src +'"></div>');
        $('#uploadimagespreview2').html('<img src="'+ src +'"></div>');
				e.preventDefault();
			}
        };
        image.src = _URL.createObjectURL(file);
});

  function deleteContent(divId) {
    var div = document.getElementById(divId);
    div.innerHTML = "";
  }