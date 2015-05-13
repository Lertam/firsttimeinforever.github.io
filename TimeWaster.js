function secCounter() 
{
	var outputTimer=document.getElementById("outputTimer");
    if(typeof secCounter.counter=="undefined")
	{
        secCounter.counter=0;
    }
    outputTimer.innerHTML="Seconds spent here: "+(secCounter.counter)+"<br>";
	secCounter.counter++;
}

setInterval(secCounter,1000);