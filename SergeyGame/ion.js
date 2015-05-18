var plNum=0;
var players={};
var editMode=false;
function addPlayer()
{
	if(editMode)alert("Вы уже редактируете игрока!");
	else{
		var elem=document.getElementById('playerList');
		elem.innerHTML+="<li id='pl_"+plNum+"'><input id='pl_"+plNum+"_txt' size=30 />\t<input type=button onclick='savePlayer("+plNum+")' value='Save' /></li>";
		plNum++;
		editMode=true;
	}
}
function editPlayer(id)
{
	if(editMode)alert("Вы уже редактируете игрока!");
	else
	{	
		var elem=document.getElementById("pl_"+id);
		elem.innerHTML="<input id='pl_"+id+"_txt' size=30 value='"+players[id]+"' />\t<input type=button onclick='savePlayer("+id+")' value='Save' />";
		editMode=true;
	}
}
function savePlayer(id)
{
	var elem=document.getElementById("pl_"+id+"_txt");
	var name=elem.value;
	if(name.length<4){alert("Player's name must have at least 4 letters!");return 0;}
	if(!unicName(name)){alert("This players name already axist!");return 0;}
	players[id]=name;
	elem=document.getElementById("pl_"+id);
	elem.innerHTML="<label id='pl_"+id+"_name'>"+players[id]+"</label>\t\t<input type=button value=Edit onclick=editPlayer("+id+") />";
	//alert("Вы создали игрока "+players[id]+"!");
	editMode=false;
}
function ionGetPlayersNum(){return plNum;}
function ionGetPlayers(){return players;}

function unicName(name)
{
	for(var i=0;i<plNum-1;i++)
	{
		if(players[i]==name)return false;
	}
	return true;
}
