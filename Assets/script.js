// console.log("Hello World");

$(document).ready(function () {
  // Points to the artists and their concert video
  var genreHipHop = musicChoice[0].artists;
  var genreRap = musicChoice[1].artists;
  var genrePop = musicChoice[2].artists;
  var genreKPop = musicChoice[3].artists;
  var genreRock = musicChoice[4].artists;
  var genreIndieAlt = musicChoice[5].artists;
  var genreCountry = musicChoice[6].artists;
  var genreElectronic = musicChoice[7].artists;

  //  List of everything nested as such
  //  musicChoice[i] = Object {genre, artist[j]}
  // artist[j] = Object {name, concert link}
  
  var musicChoice = [
    {
      genre: "Hip Hop/R&B",
      artists: [
        {
          name: "Anderson.Paak",
          concertLink: "https://www.youtube.com/watch?v=rtDzrp0xZH4",
        },
        {
          name: "Rihanna",
          concertLink: "https://www.youtube.com/watch?v=7SYmmL1uFYE",
        },
        {
          name: "Cardi B",
          concertLink: "https://www.youtube.com/watch?v=QeIc7WdEG-8",
        },
        {
          name: "Miguel",
          concertLink: "https://www.youtube.com/watch?v=J1RUMgdAY7E",
        },
        {
          name: "SZA",
          concertLink: "https://www.youtube.com/watch?v=28E9vyHZNzo",
        },
        {
          name: "Beyonce",
          concertLink: "https://www.youtube.com/watch?v=ZfZKqA3pMV0",
        },
      ],
    },
    {
      genre: "Rap",
      artists: [
        {
          name: "Childish Gambino",
          concertLink: "https://www.youtube.com/watch?v=BGGM_fdF3yA",
        },
        {
          name: "Post Malone",
          concertLink: "https://www.youtube.com/watch?v=LRxYHsEJKgI",
        },
        {
          name: "Travis Scott",
          concertLink: "https://www.youtube.com/watch?v=-mC3KQse1eY",
        },
        {
          name: "Black Thought",
          concertLink: "https://www.youtube.com/watch?v=u12r_JI8mGM",
        },
      ],
    },
    {
      genre: "Pop",
      artists: [
        {
          name: "Halsey",
          concertLink: "https://www.youtube.com/watch?v=IcKlMH1LtRk",
        },
        {
          name: "Billie Eilish",
          concertLink: "https://www.youtube.com/watch?v=THOpHvbuG-4",
        },
        {
          name: "Khalid",
          concertLink: "https://www.youtube.com/watch?v=7NoFt6MP-s8",
        },
        {
          name: "Panic! at the Disco",
          concertLink: "https://www.youtube.com/watch?v=e3MRf6BZ0LM",
        },
        {
          name: "The Weeknd",
          concertLink: "https://www.youtube.com/watch?v=VXZd_-DQ0Js",
        },
        {
          name: "Miley Cyrus",
          concertLink: "https://www.youtube.com/watch?v=gX4xV6LpKcY",
        },
        {
          name: "Ellie Goulding",
          concertLink: "https://www.youtube.com/watch?v=wEiintCfM2I",
        },
      ],
    },
    {
      genre: "K-Pop",
      artists: [
        {
          name: "BlackPink",
          concertLink: "https://www.youtube.com/watch?v=Xq71SW_8Eh4",
        },
        {
          name: "BTS",
          concertLink: "https://www.youtube.com/watch?v=9n-K9jFiiKg",
        },
      ],
    },
    {
      genre: "Rock",
      artists: [
        {
          name: "Phish",
          concertLink: "https://www.youtube.com/watch?v=1kcoOF7_mfU",
        },
        {
          name: "Bruce Springsteen",
          concertLink: "https://www.youtube.com/watch?v=VtcvOClpBKo",
        },
        {
          name: "Arctic Monkeys",
          concertLink: "https://www.youtube.com/watch?v=ppqP39p6VmI",
        },
        {
          name: "Red Hot Chili Peppers",
          concertLink: "https://www.youtube.com/watch?v=c_Hjvw0PUa8",
        },
      ],
    },
    {
      genre: "Indie/Alternative",
      artists: [
        {
          name: "Tame Impala",
          concertLink: "https://www.youtube.com/watch?v=IXu9jd6SpO0",
        },
        {
          name: "Mac Demarco",
          concertLink: "https://www.youtube.com/watch?v=1-HWXiSRD9c",
        },
        {
          name: "Boy Pablo",
          concertLink: "https://www.youtube.com/watch?v=Iq_VN8l5NAQ",
        },
      ],
    },
    {
      genre: "Country",
      artists: [
        {
          name: "Eric Church",
          concertLink: "https://www.youtube.com/watch?v=UGwjGAGMGFc",
        },
      ],
    },
    {
      genre: "Electronic",
      artists: [
        {
          name: "Louis the Child",
          concertLink: "https://www.youtube.com/watch?v=2q1MXnc5ccg",
        },
        {
          name: "Dillon Francis",
          concertLink: "https://www.youtube.com/watch?v=OcBr6uQYuQY",
        },
        {
          name: "Marshmellow",
          concertLink: "https://www.youtube.com/watch?v=5yBSJ2Z6pjY",
        },
      ],
    },
  ];

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

  var corsAnywhere = "https://cors-anywhere.herokuapp.com/";
  $.ajax({
    url: corsAnywhere + "https://tastedive.com/api/similar?q=childish+gambino",
    method: "GET",
  }).then(function (response) {
    for (i = 0; i <= 5; i++) {
      console.log(response);
      console.log(response.Similar.Results[i].Name);
    }
    // console.log(response.similar.results);
    // console.log(response.similar.results[2]);
  });
});
