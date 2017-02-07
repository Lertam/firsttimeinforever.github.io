var plNum=0;
var players={};
var editMode=false;


function addPlayer()
{
	if(editMode)
	{
		alert("You are already editing a playa!");
	}
	else
	{
		var elem=document.getElementById('playerList');
		elem.innerHTML+="<li id='pl_"+plNum+"'><input id='pl_"+plNum+"_txt' size=30 />\t<input type=button onclick='savePlayer("+plNum+")' value='Save' /></li>";
		plNum++;
		editMode=true;
	}
}

function editPlayer(id)
{
	if(editMode)
	{
		alert("You are already editing a playa!");
	}
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
	if(name.length<0)
	{
		alert("You can't add playa with no name.");
		return 0;
	}
	else if(!isUniqueName(name))
	{
		alert("This player already exist!");
		return 0;
	}
	else
	{
		players[id]=name;
		elem=document.getElementById("pl_"+id);
		elem.innerHTML="<label id='pl_"+id+"_name'>"+players[id]+"</label>\t\t<input type=button value=Edit onclick=editPlayer("+id+") />";
		//alert("Added new playa "+players[id]+"!");
		editMode=false;
	}
}

function ionGetPlayersNum()
{
	return plNum;
}

function ionGetPlayers()
{
	return players;
}

function isUniqueName(name)
{
	for(var i=0;i<plNum-1;i++)
	{
		if(players[i]==name)
		{
			return false;
		}
	}
	return true;
}

function setDefaultNumberCount(){
	document.getElementById("numberCountInp").value=numberCountGlob;
}

function clearResults(){
	document.getElementsByTagName('tbody')[0].innerHTML="";
	roundCounter = 0;
}