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

  // Empty variables to use for pointers and later optional stuff
  var userGenreChoice;
  var artistChoices;
  var userArtistChoice;
  var concertVideoId;

  //================= Function To Be Called On ===================

  function init() {
    // Cleans up page for displaying the landing page
    mainLayout.empty();

    var h1El = $("<h1>");
    var pTag = $("<p>");
    var btnEl = $("<button>");
    var iTag = $("<i>");
    var spanEl = $("<span>");

    h1El.text("COUCHELLA");
    pTag.addClass("animation");
    pTag.text("We bring the show to you.™");
    btnEl.attr("id", "start-button");
    btnEl.addClass("waves-effect waves-light btn btn-large");
    iTag.addClass("fas fa-ticket-alt flash");
    spanEl.addClass("flash");
    spanEl.text(" GRAB YOUR TICKET");

    mainLayout.append(h1El, pTag, btnEl);
    btnEl.append(iTag, spanEl);
  }

  // User picks which Genre of music the would like to see
  function showGenrePage(event) {
    // Cleans up page for displaying Genres
    event.stopPropagation();
    mainLayout.empty();

    var h1El = $("<h1>");
    h1El.text("PICK A GENRE");

    mainLayout.append(h1El);
    // Loops through musicChoice to get Genres' buttons
    for (i = 0; i < musicChoice.length; i++) {
      var genreBtn = $("<button>");
      var divEl = $("<div>");
      var brEl = $("<br>");
      // I added genre-btn. There wasn't another way having an "empty/no effect" pointer
      // This way it has it's unique point and will not share a similar pointer as the artist buttons
      genreBtn.addClass(
        "waves-effect waves-light genre-btn btn btn-large button " +
          buttonImg[i]
      );
      // I used "i" to serve a grab point to indicate which genre was chosen
      genreBtn.attr("id", i);
      // This is the start of a chain to just get the concert pop up to grab the correct genre,
      // so we can get the correct artist list and then correct artist and videoID.
      // Sets "button" with the name of the genre
      genreBtn.attr("name", musicChoice[i].genre);
      divEl.addClass("btn-text");
      divEl.text(musicChoice[i].genre);
      mainLayout.append(genreBtn, brEl);
      genreBtn.append(divEl);
    }
  }

  // Need get user choice of genre and then display artist
  function showArtists(event) {
    // Cleans up page for displaying artists
    event.stopPropagation();
    mainLayout.empty();
    // Grabs the name of the button clicked and puts in to the empty variable "userGenreChoice"
    userGenreChoice = $(this).attr("name");
    var btnId = $(this).attr("id");

    // Header text append before get artist list buttons
    var h1El = $("<h1>");
    h1El.text("PICK AN ARTIST");

    mainLayout.append(h1El);
    // Renders Artist Buttons using the "id" number as an indicator/pointer into the whichGenre array
    for (i = 0; i < whichGenre[btnId].length; i++) {
      var artistBtn = $("<button>");
      var divEl = $("<div>");
      var brEl = $("<br>");
      // Same idea, use "i" to be an indicator/pointer to an array with the next function call
      artistBtn.attr("id", i);
      // Just realized this might not be necessary anymore but it is still a nice indicator/pointer
      // to keep and it gives a solid checkpoint on the DOM to call to
      artistBtn.attr("type", userGenreChoice);
      artistBtn.addClass(
        "waves-effect waves-light btn btn-large button music-img"
      );
      divEl.addClass("btn-text");
      divEl.text(whichGenre[btnId][i].name);

      mainLayout.append(artistBtn, brEl);
      artistBtn.append(divEl);
    }
  }

  // This is SUPER IMPORTANT
  // It checks userGenreChoice for which genre then sets
  // the empty variable "artistChoices" as the correct array to work with
  function selectConcert() {
    if (userGenreChoice == "Hip Hop/R&B") {
      artistChoices = genreHipHop;
    } else if (userGenreChoice == "Rap") {
      artistChoices = genreRap;
    } else if (userGenreChoice == "Pop") {
      artistChoices = genrePop;
    } else if (userGenreChoice == "K-Pop") {
      artistChoices = genreKPop;
    } else if (userGenreChoice == "Rock") {
      artistChoices = genreRock;
    } else if (userGenreChoice == "Indie/Alternative") {
      artistChoices = genreIndieAlt;
    } else if (userGenreChoice == "Country") {
      artistChoices = genreCountry;
    } else if (userGenreChoice == "Electronic") {
      artistChoices = genreElectronic;
    }
  }

  function displayConcert(event) {
    // Cleans up page for displaying the concert
    event.stopPropagation();
    mainLayout.empty();
    // We call the checker here
    selectConcert();
    console.log(artistChoices);
    // We get the indicator or pointer for the array here
    var btnId = $(this).attr("id");
    // we use both the checker and pointer to fill in the empty variables values
    userArtistChoice = artistChoices[btnId].name;
    concertVideoId = artistChoices[btnId].videoID;
    console.log(userArtistChoice);
    console.log(concertVideoId);

    var h1El = $("<h1>");
    var concertScreen = $("<iframe>");

    // I think we might need another API other than this youtube embed one
    concertScreen.attr("id", "ytplayer");
    concertScreen.attr("type", "text/html");
    concertScreen.attr("width", "640");
    concertScreen.attr("height", "390");
    concertScreen.attr(
      "src",
      "https://www.youtube.com/embed/" + concertVideoId
    );
    concertScreen.attr("frameborder", "0");
    h1El.text("ENJOY THE SHOW");

    var cardPanel = $("<div>");
    var h6El = $("<h6>");
    var spanEl = $("<span>");

    cardPanel.addClass("card-panel color");
    spanEl.addClass("white-text");
    h6El.text(
      "Enjoying the show? Here are some similar artists you might like!"
    );

    // Builds the first part of the concert page
    mainLayout.append(h1El, concertScreen, cardPanel);
    cardPanel.append(spanEl);
    spanEl.append(h6El);

    var corsAnywhere = "https://cors-anywhere.herokuapp.com/";

    // Currently sometimes getting error 429(Too many requests) when the API was called on
    // Which is weird since I am only calling on it once???
    $.ajax({
      url:
        corsAnywhere +
        "https://tastedive.com/api/similar?q=" +
        userArtistChoice,
      method: "GET",
    }).then(function (response) {
      console.log(response.Similar.Results);
      // Takes response.Similar.Results and starts from index 0 in the array and stops before index 5, 0 =< x < 5;
      // Then it "slices" that portion out. Then "map" makes a new array from that slice
      //  I am calling that array that was mapped "artists"
      // Then I am telling it to return artists or in other words topFiveSimilar = artists[]
      var topFiveSimilar = response.Similar.Results.slice(0, 5).map(
        (artists) => {
          return artists;
        }
      );

      // Just another way of doing a for loop using forEach and have a counter on the outside and an incrementor on the inside
      // Pretty much does the same thing, don't know why I did it like this
      var i = 0;
      topFiveSimilar.forEach((musicTalent) => {
        var pTag = $("<p>");

        pTag.attr("id", i);
        pTag.addClass("white-text");
        pTag.text(musicTalent.Name);

        spanEl.append(pTag);
        i++;
      });
    });
  }

  //============= Functions being called =======================
  // Sets everything up, brings up landing page
  init();

  //================= Event listeners ===========================
  // Listens for click events on the document, with a pointer(class or id) and then executes function
  $(document).on("click", "#start-button", showGenrePage);
  $(document).on("click", ".genre-btn", showArtists);
  $(document).on("click", ".music-img", displayConcert);
});
