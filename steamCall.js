
var loadXML = function(){
  var id = '76561198254047403' // prompt("Please enter user Steam ID");
  var url = 'http://localhost:4000/steam/' + id;
  var xhttp = new XMLHttpRequest();
  var relevantFields = ["personaname", "lastlogoff", "profileurl"];
  var relevantDetails = {};  
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.response).response.players[0]
        
        Object.keys(response).forEach(function(key){ 
          if (relevantFields.includes(key)) relevantDetails[`${key}`] = response[`${key}`];
        });
      }
      for (var detail in relevantDetails){
        $('#playerInfo').append(`<p>${JSON.stringify(relevantDetails[detail])}</p>`);
      };
      $('#profileViewer').html(`<object type="text/html" id="profileObject" data="${relevantDetails.profileurl}"></object>`);
      $('#playerName').html(`<p>${relevantDetails.personaname}<p>`);
  };
  
  xhttp.open("GET", url, true);
  xhttp.send();
}





