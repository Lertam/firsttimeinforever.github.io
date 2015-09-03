function LinearCongruentialGenerator(seed)
{
	this.seed = seed;
	this.prev = seed;
	this.modulus = 0;
	this.multiplier = 0;
	this.increment = 0;
	
	this.generate = function()
	{
		this.prev = (this.prev * this.multiplier + this.increment) % this.modulus;
		return this.prev;
	};
};