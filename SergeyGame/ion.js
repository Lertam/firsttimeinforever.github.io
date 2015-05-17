var plNum=0;
var players={};
function addPlayer(name)
{
	plNum++;
	players[plNum]=name;
	document.getElementById('playerList').innerHTML+="<li id='player_"+plNum+"'>"+name+"</li>";
	alert("Вы создали игрока '"+name+"'!");
}
function ionGetPlayersNum(){return plNum;}
function ionGetPlayers(){return players;}
