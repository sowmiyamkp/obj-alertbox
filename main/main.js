var numTime;
function started()
{
	numTime=setTimeout(mystart,2000)
}
function mystart()
{
	alert("hello")
}
function stoped()
{
	clearInterval(numTime); 
}
