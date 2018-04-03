  var nbaPlayers = ["Lebron James", "Kevin Durant", "James Harden", "Steph Curry", "Russel Westbrook"];

  function displayPlayerInfo() {

    var player = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + player + "&api_key=WJZl6YIKEjjDRZS0YHkR1QeYAe1vKLcD&limit=5";
    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      var nbaDiv = $("<div class='nba'>");

      var rating = response.Rated;

      var pOne = $("<p>").text("Rating: " + rating);

      nbaDiv.append(pOne);

    
      $("#superstar-view").prepend(nbaDiv);
    });

  }

  function renderButtons() {

    $("#buttons-view").empty();

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
    
    var playerText = $("#player-input").val();

    nbaPlayers.push(playerText);

    $("#buttons-div").empty();
    renderButtons();
  });

  $(document).on("click", ".player-btn", displayPlayerInfo);

  renderButtons();
