function Determinator(data_arr)
{
	this.data = data_arr;
	this.type = 2;

	this.set = function(data_arr, type)
	{
		this.data = data_arr;
		this.type = type;
	};


	this.solve = function()
	{
		return this.data[0][0]*this.data[1][1]*this.data[2][2]+
		   this.data[1][0]*this.data[2][1]*this.data[0][2]+
		   this.data[0][1]*this.data[1][2]*this.data[2][0]-
		   (
		   this.data[0][2]*this.data[1][1]*this.data[2][0]+
		   this.data[2][1]*this.data[1][2]*this.data[0][0]+
		   this.data[0][1]*this.data[1][0]*this.data[2][2]
		   );
	};
	
	this.mainDiag = function()
	{
		return [this.data[0][0], this.data[1][1], this.data[2][2]];	
	};
	
	this.calcMainDiag = function()
	{
		return this.data[0][0]*this.data[1][1]*this.data[2][2];
	};
	
	this.sideDiag = function()
	{
		return [this.data[0][2], this.data[1][1], this.data[2][0]];
	};	
	
	this.calcSideDiag = function()
	{
		return this.data[0][2]*this.data[1][1]*this.data[2][0];
	};
};


function calculate()
{
	var arr = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	];
	
	for(var it = 0; it < 3; it ++)
	{
		for(var st = 0; st < 3; st ++)
		{
			console.log("determ_data"+it+""+st);
			arr[it][st]=document.getElementById("determ_data"+it+""+st).value;
		}
	}
	
    var d = new Determinator(arr);
    console.log(d.solve());
	
	document.getElementById("result_output").value = "Result: " + d.solve();
}
