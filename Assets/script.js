// console.log("Hello World");

$(document).ready(function () {

// var corsAnywhere = "https://cors-anywhere.herokuapp.com/"
// $.ajax({
//     url: corsAnywhere + "https://tastedive.com/api/similar?q=red+hot+chili+peppers%2C+pulp+fiction",
//     method: "GET"
//   }).then(function(response) {
//     console.log(response);
//   });
// })

// $("#CityName").text(cityName);
// var artistName =

// var corsAnywhere = "https://cors-anywhere.herokuapp.com/"

// $.ajax({
//     url: corsAnywhere + "https://tastedive.com/api/similar?q=" + artistName,
//     method: "GET"
//   }).then(function(response) {
//     console.log(response);
//     console.log(response.Similar.Results[0].Name);
//     // console.log(response.similar.results);
//     // console.log(response.similar.results[2]);
//   });
// })

// $("#CityName").text(cityName);
// var artistName =

var corsAnywhere = "https://cors-anywhere.herokuapp.com/"
$.ajax({
    url: corsAnywhere + "https://tastedive.com/api/similar?q=childish+gambino",
    method: "GET"
  }).then(function(response) {
    for (i=0; i<=5; i++) {
        console.log(response);
    console.log(response.Similar.Results[i].Name);
    }
    // console.log(response.similar.results);
    // console.log(response.similar.results[2]);
  });
})




