  var nbaPlayers = ["Lebron James", "Kevin Durant", "James Harden", "Steph Curry", "Russel Westbrook"];

  function displayPlayerInfo() {
    $("#superstar-view").empty();

    var player = $(this).attr("button-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + player + "&api_key=WJZl6YIKEjjDRZS0YHkR1QeYAe1vKLcD&limit=10";
    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      
      var nbaDiv = $("<div class='nba'>");
      nbaDiv.append("<")

      for(var i = 0; i < 9; i++) {
      

      var rating = response.data["" +i+ ""].rating;

      var p = $("<p>").text("Rating: " + rating);

      var imgURL = response.data["" +i+ ""].images.fixed_width.url;

          // Creating an element to hold the image
          var image = $("<img>").attr("src", imgURL);
      
      nbaDiv.append(p);
      nbaDiv.append(image);

      }
    
      $("#superstar-view").append(nbaDiv);
    });

  }

  function renderButtons() {

    $("#buttons-div").empty();

    for (var i = 0; i < nbaPlayers.length; i++) {

      var a = $("<button>");
      a.addClass("player-btn");
      a.attr("button-name", nbaPlayers[i]);
      a.text(nbaPlayers[i]);
      $("#buttons-div").append(a);
    }
  }

  $("#add-player").on("click", function(event) {
    event.preventDefault();
    
    var addP= $("#player-input").val().trim();

    nbaPlayers.push(addP);
    console.log(addP);
    $("#buttons-div").empty();
    renderButtons();
  });

  $(document).on("click", ".player-btn", displayPlayerInfo);

  renderButtons();
