
var loadXML = function(){
  var id = prompt("Please enter user Steam ID");
  var url = 'http://localhost:4000/steam/' + id;
  var xhttp = new XMLHttpRequest();
  var relevantFields = ["personaname", "lastlogoff", "profileurl"];
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        var response = JSON.parse(this.response).response.players[0]
        var relevantDetails = {};
        Object.keys(response).forEach(function(key){ 
          if (relevantFields.includes(key)) relevantDetails[`${key}`] = response[`${key}`];
        });
       $('#results').html(`<p>${JSON.stringify(relevantDetails)}</p>`);
       $('#profileViewer').html(`<object type="text/html" data="${relevantDetails.profileurl}" width="400px" height="300px" style="overflow:auto;border:5px ridge blue">
    </object>`)
      }
  };
  
  xhttp.open("GET", url, true);
  xhttp.send();
}



