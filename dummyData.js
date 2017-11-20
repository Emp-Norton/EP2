var player1 = new Player("Bingo");
var player2 = new Player("Ognib");
var player3 = new Player("Rutherford")


player1.uname = "Bingo the Dingo";
player1.steamId= "1234";
player1.uPlayId= "2345";
player1.games= {
			steam: ["Company of Heroes= Tales of Valor", "Just Cause 2", "Company of Heroes", "The Elder Scrolls IV= Oblivion® Game of the Year Edition", "The Elder Scrolls V= Skyrim", "Red Orchestra 2= Heroes of Stalingrad with Rising Storm", "Company of Heroes 2", "Battlezone 98 Redux", "Fallout 2= A Post Nuclear Role Playing Game", "Mount & Blade= Warband", "The Witcher® 3= Wild Hunt", "Fallout 4", "Just Cause™ 3", "Day of Infamy", "Project CARS"],
			uplay: ["wildlands"],
			android: ["alto"],
			xbox: [],
			playstation: [],
		};
player1.personality= ["serious", "independent"];
player1.peakHrs= [1800, 1900, 2000];
player1.typicalDuration= 350;
player1.noMods= false
player1.attrWeights = {
			peakHrs: 1,
			personality: 2,
			platformOverlap: 3,
			games: 4,
			typicalDuration: 5,
			mods: 6
		}



player2.uname = "Ognib Bognib";
player2.steamId= "4321";
player2.uPlayId= "5432";
player2.games= {
			steam: ["Company of Heroes= Tales of Valor", "Just Cause 2", "Company of Heroes", "The Elder Scrolls IV= Oblivion® Game of the Year Edition", "The Elder Scrolls V= Skyrim", "Red Orchestra 2= Heroes of Stalingrad with Rising Storm", "Company of Heroes 2", "Battlezone 98 Redux", "Fallout 2= A Post Nuclear Role Playing Game", "Mount & Blade= Warband", "The Witcher® 3= Wild Hunt", "Fallout 4", "Just Cause™ 3", "Day of Infamy", "Project CARS"],
			uplay: ["wildlands"],
			android: [],
			xbox: ["Tony Hawk Skates", "1080 snowboarding"],
			playstation: [],
		};
player2.personality= ["serious", "cooperative"];
player2.peakHrs= [0100, 0200, 1800];
player2.typicalDuration= 100;
player2.noMods= true;
player2.attrWeights = {
			peakHrs: 1,
			personality: 3,
			platformOverlap: 4,
			games: 2,
			typicalDuration: 5,
			mods: 6
		}


player3.uname = "Scare-odactyl";
player3.steamId= "1111";
player3.uPlayId= "2222";
player3.games= {
			steam: ["Company of Heroes 2", "Mount & Blade= Warband", "The Witcher® 3= Wild Hunt", "Fallout 4", "Just Cause™ 3", "Day of Infamy", "Project CARS"],
			uplay: [],
			android: ["alto"],
			xbox: [],
			playstation: [],
		};
player3.personality= ["silly", "independent"];
player3.peakHrs= [0400, 1130];
player3.typicalDuration= 75;
player3.noMods= true;
