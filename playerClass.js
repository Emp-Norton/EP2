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
			peakHrs: undefined,
			personality: undefined,
			platformOverlap: undefined,
			games: undefined,
			typicalDuration: undefined,
			mods: undefined
		}
	}
	player.name = name;
	return player
}


