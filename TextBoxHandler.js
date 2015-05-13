var targetTextBox=document.getElementById("inputStr");
targetTextBox.addEventListener("change",function()
{
	var targetOutupText=document.getElementById("outputText");
	targetOutupText.value=targetTextBox.value;
});