
var relevantFields = ["personaname", "lastlogoff", "profileurl"];
var relevantDetails = {};
var friendList = [];
var gamesList = [];
var gameNames = [];

var loadXML = function(id, type){
  var url = `http://localhost:4000/${type}/${id}`;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      if (type === "friends"){
        friendList = JSON.parse(this.response).friendslist.friends;
        for (var friendIndex in friendList){
          $('#playerFriends').prepend(`<p>${JSON.stringify(friendList[friendIndex].steamid)}</p>`) // move these to more appropriate place
        };
      } else if (type === "games"){
        gamesList = JSON.parse(this.response).response.games;
        getGameNames(gamesList);
        if (gameNames.length > 0) renderResults();
      } else if (type === "profile") {
        var response = JSON.parse(this.response).response.players[0];
        Object.keys(response).forEach(function(key){ 
          if (relevantFields.includes(key)) relevantDetails[`${key}`] = response[`${key}`];
        });
        getFriends(id);
        getGames(id);
      } else {
        var response = JSON.parse(this.response)[`${id}`]
        gameNames.push(response.data.name);
      }
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

var renderResults = function(){
    for (var detail in relevantDetails){
      $('#playerInfo').prepend(`<p>${JSON.stringify(relevantDetails[detail])}</p>`);
    };
    $('#profileViewer').html(`<object type="text/html" id="profileObject" data="${relevantDetails.profileurl}"></object>`);
    $('#playerName').html(`<p>${relevantDetails.personaname}<p>`);
    $('#playerInfo').show();
    $('#profileViewer').show();
    $('#playerSearch').hide();
}
// these should be prototype methods on the player object.
var getFriends = function(id){
  loadXML(id, "friends");
}

var getGames = function(id){
  loadXML(id, "games");
}

var getGameNames = function(gameList){
  for (var gameIdx = 0; gameIdx < gameList.length; gameIdx++){
    loadXML(gameList[gameIdx].appid, "gameDetails")
  }
}