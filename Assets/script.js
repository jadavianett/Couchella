// console.log("Hello World");

$(document).ready(function () {
  var mainLayout = $("#main-layout");

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
          videoID: "rtDzrp0xZH4",
        },
        {
          name: "Rihanna",
          concertLink: "https://www.youtube.com/watch?v=7SYmmL1uFYE",
          videoID: "7SYmmL1uFYE",
        },
        {
          name: "Cardi B",
          concertLink: "https://www.youtube.com/watch?v=QeIc7WdEG-8",
          videoID: "QeIc7WdEG-8",
        },
        {
          name: "Miguel",
          concertLink: "https://www.youtube.com/watch?v=J1RUMgdAY7E",
          videoID: "J1RUMgdAY7E",
        },
        {
          name: "SZA",
          concertLink: "https://www.youtube.com/watch?v=28E9vyHZNzo",
          videoID: "28E9vyHZNzo",
        },
        {
          name: "Beyonce",
          concertLink: "https://www.youtube.com/watch?v=ZfZKqA3pMV0",
          videoID: "ZfZKqA3pMV0",
        },
      ],
    },
    {
      genre: "Rap",
      artists: [
        {
          name: "Childish Gambino",
          concertLink: "https://www.youtube.com/watch?v=BGGM_fdF3yA",
          videoID: "BGGM_fdF3yA",
        },
        {
          name: "Post Malone",
          concertLink: "https://www.youtube.com/watch?v=LRxYHsEJKgI",
          videoID: "LRxYHsEJKgI",
        },
        {
          name: "Travis Scott",
          concertLink: "https://www.youtube.com/watch?v=-mC3KQse1eY",
          videoID: "-mC3KQse1eY",
        },
        {
          name: "Black Thought",
          concertLink: "https://www.youtube.com/watch?v=u12r_JI8mGM",
          videoID: "u12r_JI8mGM",
        },
      ],
    },
    {
      genre: "Pop",
      artists: [
        {
          name: "Halsey",
          concertLink: "https://www.youtube.com/watch?v=IcKlMH1LtRk",
          videoID: "IcKlMH1LtRk",
        },
        {
          name: "Billie Eilish",
          concertLink: "https://www.youtube.com/watch?v=THOpHvbuG-4",
          videoID: "THOpHvbuG-4",
        },
        {
          name: "Khalid",
          concertLink: "https://www.youtube.com/watch?v=7NoFt6MP-s8",
          videoID: "7NoFt6MP-s8",
        },
        {
          name: "Panic! at the Disco",
          concertLink: "https://www.youtube.com/watch?v=e3MRf6BZ0LM",
          videoID: "e3MRf6BZ0LM",
        },
        {
          name: "The Weeknd",
          concertLink: "https://www.youtube.com/watch?v=VXZd_-DQ0Js",
          videoID: "VXZd_-DQ0Js",
        },
        {
          name: "Miley Cyrus",
          concertLink: "https://www.youtube.com/watch?v=gX4xV6LpKcY",
          videoID: "gX4xV6LpKcY",
        },
        {
          name: "Ellie Goulding",
          concertLink: "https://www.youtube.com/watch?v=wEiintCfM2I",
          videoID: "wEiintCfM2I",
        },
      ],
    },
    {
      genre: "K-Pop",
      artists: [
        {
          name: "NCT 127",
          concertLink: "https://www.youtube.com/watch?v=xgDdmABGZj0",
          videoID: "xgDdmABGZj0",
        },
        {
          name: "BlackPink",
          concertLink: "https://www.youtube.com/watch?v=Xq71SW_8Eh4",
          videoID: "Xq71SW_8Eh4",
        },
        {
          name: "BTS",
          concertLink: "https://www.youtube.com/watch?v=9n-K9jFiiKg",
          videoId: "9n-K9jFiiKg",
        },
        {
          name: "Red Velvet",
          concertLink: "https://www.youtube.com/watch?v=0zfHp5xCVj8",
          videoID: "0zfHp5xCVj8",
        },
      ],
    },
    {
      genre: "Rock",
      artists: [
        {
          name: "Phish",
          concertLink: "https://www.youtube.com/watch?v=1kcoOF7_mfU",
          videoID: "1kcoOF7_mfU",
        },
        {
          name: "Bruce Springsteen",
          concertLink: "https://www.youtube.com/watch?v=VtcvOClpBKo",
          videoID: "VtcvOClpBKo",
        },
        {
          name: "Arctic Monkeys",
          concertLink: "https://www.youtube.com/watch?v=ppqP39p6VmI",
          videoID: "ppqP39p6VmI",
        },
        {
          name: "Red Hot Chili Peppers",
          concertLink: "https://www.youtube.com/watch?v=c_Hjvw0PUa8",
          videoID: "c_Hjvw0PUa8",
        },
      ],
    },
    {
      genre: "Indie/Alternative",
      artists: [
        {
          name: "Tame Impala",
          concertLink: "https://www.youtube.com/watch?v=IXu9jd6SpO0",
          videoID: "IXu9jd6SpO0",
        },
        {
          name: "Mac Demarco",
          concertLink: "https://www.youtube.com/watch?v=1-HWXiSRD9c",
          videoID: "1-HWXiSRD9c",
        },
        {
          name: "Boy Pablo",
          concertLink: "https://www.youtube.com/watch?v=Iq_VN8l5NAQ",
          videoID: "Iq_VN8l5NAQ",
        },
      ],
    },
    {
      genre: "Country",
      artists: [
        {
          name: "Eric Church",
          concertLink: "https://www.youtube.com/watch?v=UGwjGAGMGFc",
          videoID: "UGwjGAGMGFc",
        },
      ],
    },
    {
      genre: "Electronic",
      artists: [
        {
          name: "Louis the Child",
          concertLink: "https://www.youtube.com/watch?v=2q1MXnc5ccg",
          videoID: "2q1MXnc5ccg",
        },
        {
          name: "Dillon Francis",
          concertLink: "https://www.youtube.com/watch?v=OcBr6uQYuQY",
          videoID: "OcBr6uQYuQY",
        },
        {
          name: "Marshmellow",
          concertLink: "https://www.youtube.com/watch?v=5yBSJ2Z6pjY",
          videoID: "5yBSJ2Z6pjY",
        },
      ],
    },
  ];

  var buttonImg = [
    "hiphop-img",
    "rap-img",
    "pop-img",
    "kpop-img",
    "rock-img",
    "indie-img",
    "country-img",
    "electro-img",
  ];
  var buttonText = [
    "rap-text",
    "hiphop-text",
    "pop-text",
    "kpop-text",
    "rock-text",
    "indie-text",
    "country-text",
    "electro-text",
  ];

  // Points to the artists and their concert video
  var genreHipHop = musicChoice[0].artists;
  var genreRap = musicChoice[1].artists;
  var genrePop = musicChoice[2].artists;
  var genreKPop = musicChoice[3].artists;
  var genreRock = musicChoice[4].artists;
  var genreIndieAlt = musicChoice[5].artists;
  var genreCountry = musicChoice[6].artists;
  var genreElectronic = musicChoice[7].artists;

  var whichGenre = [
    genreHipHop,
    genreRap,
    genrePop,
    genreKPop,
    genreRock,
    genreIndieAlt,
    genreCountry,
    genreElectronic,
  ];

  //================= Function To Be Called On ===================
  function init() {
    mainLayout.empty();

    var h1El = $("<h1>");
    var pTag = $("<p>");
    var btnEl = $("<button>");
    var iTag = $("<i>");
    var spanEl = $("<span>");

    h1El.text("COUCHELLA");
    pTag.addClass("bounce");
    pTag.text("We bring the show to you.&trade;");
    btnEl.attr("id", "start-button");
    btnEl.addClass("waves-effect waves-light btn btn-large");
    iTag.addClass("fas fa-ticket-alt flash");
    spanEl.addClass("flash");
    spanEl.text(" GRAB YOUR TICKET");

    mainLayout.append(h1El, pTag, btnEl);
    btnEl.append(iTag, spanEl);
  }

  function showGenrePage(event) {
    event.stopPropagation();
    mainLayout.empty();
    

    var h1El = $("<h1>");
    h1El.text("pick a genre");

    mainLayout.append(h1El);
    for (i = 0; i < musicChoice.length; i++) {
      var genreBtn = $("<button>");
      var divEl = $("<div>");
      var brEl = $("<br>");

      genreBtn.addClass(
        "waves-effect waves-light btn btn-large button " + buttonImg[i]
      );
      genreBtn.attr("id", i);
      divEl.addClass("btn-text");
      divEl.text(musicChoice[i].genre);

      mainLayout.append(genreBtn, brEl);
      genreBtn.append(divEl);
    }
  }


  // Need get user choice of genre and then display artist
  function showArtists(event) {
    // event.stopPropagation();
    // mainLayout.empty();
    

    var btnId = $(this).attr("id");
    console.log(btnId);



    // var h1El = $("<h1>");
    // h1El.text("pick a genre");

    // mainLayout.append(h1El);

    // var artistBtn = $("<button>");
    // var divEl = $("<div>");
    // var brEl = $("<br>");
  }

  // filter then match filter with artist name, then whatever array[i]
  // target array[i].videoID

  function displayConcert() {
    var ytplayer = document.querySelector("#ytplayer");
    ytplayer.src =
      "https://www.youtube.com/embed/" + genreHipHop.artists[3].videoID;
    console.log(ytplayer.src);

    var artistName = "Beyonce";
    $("button").val();

    var corsAnywhere = "https://cors-anywhere.herokuapp.com/";

    $.ajax({
      url: corsAnywhere + "https://tastedive.com/api/similar?q=" + artistName,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      console.log(response.Similar.Results[0].Name);
    });
  }

  //============= Functions being called =================
  init();

  //================= Event listeners ===========================
  $(document).on("click", "#start-button", showGenrePage);
  $(document).on("click", ".button", showArtists);

  // $("#CityName").text(cityName);
  // var artistName =

  // var corsAnywhere = "https://cors-anywhere.herokuapp.com/";
  // $.ajax({
  //   url: corsAnywhere + "https://tastedive.com/api/similar?q=childish+gambino",
  //   method: "GET",
  // }).then(function (response) {
  //   for (i = 0; i <= 5; i++) {
  //     console.log(response);
  //     console.log(response.Similar.Results[i].Name);
  //   }
  //   // console.log(response.similar.results);
  //   // console.log(response.similar.results[2]);
  // });
});
