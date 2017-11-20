var Player = function(name){
	var player = Object.create(Player.prototype)
    player = {
		name: "",
		uname: "",
		steamId: "",
		uPlayId: "",
		games: {
			steam: [],
			uplay: [],
			android: [],
			xbox: [],
			playstation: [],
		},
		personality: [],
		friends: [],
		peakHrs: [],
		typicalDuration: undefined,
		noMods: undefined,
		attrWeights: {
			availability: undefined,
			personality: undefined,
			playformOverlap: undefined,
			gameOverlap: undefined,
			duration: undefined,
			mods: undefined
		}
	}
	player.name = name;
	return player
}


