
var loadXML = function(id, type){
  //'76561198254047403'
  var url = `http://localhost:4000/${type}/${id}`;
  var xhttp = new XMLHttpRequest();
  var relevantFields = ["personaname", "lastlogoff", "profileurl"];
  var relevantDetails = {};  
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        if (type === "friends") console.log(this.response)
        var response = JSON.parse(this.response).response.players[0]
        Object.keys(response).forEach(function(key){ 
         if (relevantFields.includes(key)) relevantDetails[`${key}`] = response[`${key}`];
        });
      }
      // these next lines don't belong here, move them to their own function -- inside render seems best for now.
      for (var detail in relevantDetails){
        $('#playerInfo').append(`<p>${JSON.stringify(relevantDetails[detail])}</p>`);
      };
      $('#profileViewer').html(`<object type="text/html" id="profileObject" data="${relevantDetails.profileurl}"></object>`);
      $('#playerName').html(`<p>${relevantDetails.personaname}<p>`);
  };
  
  xhttp.open("GET", url, true);
  xhttp.send();
}

var renderResults = function(){
  loadXML($('#playerSearchField').val(), "friends") // call call with "friends" instead, but need to instantiate a storage div or player object for results.
  $('#playerInfo').show();
  $('#profileViewer').show();
  $('#playerSearch').hide();
}
// these should be prototype methods on the player object.
var getFriends = function(){
  loadXML($('#playerSearchField').val(), "friends")
}




