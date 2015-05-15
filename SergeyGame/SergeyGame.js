function Player(name)
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
	return (this.numberArray.indexOf(num)!=-1);
};

Player.prototype.getNumberArray=function()
{
	return this.numberArray;
};


function Game()
{
	this.players=new Array();
	this.canBeModified=true;
	this.startNumbers=new Array();
	this.targetNumber=-1;
	
	this.winnerName=null;
	
	this.getRandomInt=function(min,max) 
	{
	    return Math.floor(Math.random()*(max-min+1))+min;
	};
	//this.numberCount=numberCount;
}

Game.prototype.addPlayer=function(playerName)
{
	if(this.canBeModified)
	{
		this.players.push(new Player(playerName));
	}
	else
	{
		alert("You can't modify player list after starting a game!");
	}
};

Game.prototype.removePlayer=function(playerName)
{
	if(this.canBeModified)
	{
		this.players.splice(this.players.indexOf(playerName),1);
	}
	else
	{
		alert("You can't modify player list after starting a game!");
	}
};

Game.prototype.setNumberCount=function(numberCount)
{
	if(this.canBeModified)
	{
		this.numberCount=numberCount;
	}
	else
	{
		alert("You can't change number count after starting a game!");
	}
};

Game.prototype.getPlayerCount=function()
{
	return this.players.length;
};

Game.prototype.giveNumbers=function()
{
	this.canBeModified=false;
	for(var it=0;it<this.numberCount;it++)
	{
		this.startNumbers.push(it);
	}
	
	for(var plIdx=0;plIdx<this.players.length;plIdx++)
	{
		for(var iter=0;iter<Math.floor(this.numberCount/this.getPlayerCount());iter++)
		{
			var myPos=this.getRandomInt(0,this.startNumbers.length-1);
			//console.log("myPos "+myPos+" arr length "+this.startNumbers.length);
			this.players[plIdx].addNumber(this.startNumbers[myPos]);
			console.log("Giving "+this.players[plIdx].getName()+" "+this.startNumbers[myPos]);
			this.startNumbers.splice(myPos,1);
		}
	}
};

Game.prototype.getPlayers=function()
{
	return this.players;	
};

Game.prototype.genTargetNumber=function()
{
	this.targetNumber=this.getRandomInt(0,this.numberCount-1);
};

Game.prototype.getTargetNumber=function()
{
	return this.targetNumber;
};

Game.prototype.findWinner=function()
{
	for(var idx=0;idx<this.getPlayerCount();idx++)
	{
		if(this.players[idx].checkForNumber(this.targetNumber))
		{
			this.winnerName=this.players[idx].getName();
		}
	}
};

Game.prototype.getWinnerName=function()
{
	return this.winnerName;
};

function makeGame()
{
	var game=new Game();
	game.addPlayer("Sergey");
	game.addPlayer("Ivan");
	//console.log(game.getPlayerCount());
	game.setNumberCount(40);
	game.giveNumbers();
	game.genTargetNumber();
	game.findWinner();
	console.log("Target number "+game.getTargetNumber());
	console.log("Winner "+game.getWinnerName());	
}

makeGame();

