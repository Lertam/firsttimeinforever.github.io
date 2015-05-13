function Player(id,name)
{
	this.name=name;
	this.numberArray=new Array();
}

Player.prototype.addNumber=function(num)
{
	this.numberArray.push(num);
};

Player.prototype.getName=function()
{
	return this.name;
};

Player.prototype.checkForNumber=function(num)
{
	return this.numberArray.includes(num);
};


function Game()
{
	this.players=new Array();
	//this.numberCount=numberCount;
}

Game.prototype.addPlayer=function(playerName)
{
	this.players.push(new Player(playerName));
};

Game.prototype.removePlayer=function(playerName)
{
	this.players.splice(this.players.indexOf(playerName),1);
};

Game.prototype.setNumberCount=function(numberCount)
{
	this.numberCount=numberCount;
};

Game.prototype.getPlayerCount=function()
{
	return this.players.length;
};

var game=new Game();

game.addPlayer("Sergey");
console.log(game.getPlayerCount());
game.removePlayer("Sergey");
console.log(game.getPlayerCount());

var addPlayerButtonPtr=document.getElementById("addPlayerButton");
var newPlayerNameTextBox=document.getElementById("newPlayerName");
