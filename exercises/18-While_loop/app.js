
//fix this function:
function startCounting()
{
	var counter = 100;
	while(counter <= 100)
	{
		if (counter < 0){
			return ;
		} else {
		console.log(counter);
		counter --;
		}
	}
	
	return counter;
}

startCounting();