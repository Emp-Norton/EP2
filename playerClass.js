var Player = function(name){
	var player = Object.create(Player.prototype)
    player = {
		name: "",
		steamId: "",
		uPlayId: "",
		games: [],
		personality: "",
		friends: []
	}
	player.name = name;
	return player
}

Player.prototype.loadXML = function(type){
	loadXML(this.steamId, type)
}

