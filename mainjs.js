function aboutClick() 
{
	//var about = document.getElementById('about');
	//var links = document.getElementById('links');
	
	document.getElementById("text").innerHTML = "<img src='images/circlelogo.png' alt='melol' style='float:left'> hi i make games and i don't like writing about myself so i'm going to copy and paste this so my website appears to have content. hi i make games and i don't like writing about myself so i'm going to copy and paste this so my website appears to have content. hi i make games and i don't like writing about myself so i'm going to copy and paste this so my website appears to have content. hi i make games and i don't like writing about myself so i'm going to copy and paste this so my website appears to have content. hi i make games and i don't like writing about myself so i'm going to copy and paste this so my website appears to have content. hi i make games and i don't like writing about myself so i'm going to copy and paste this so my website appears to have content. hi i make games and i don't like writing about myself so i'm going to copy and paste this so my website appears to have content. ";
	
	linetoworkwith = document.getElementById("text");
	
	linetoworkwith.classList.remove("fadeInDown");
	linetoworkwith.offsetWidth = linetoworkwith.offsetWidth;
	linetoworkwith.classList.add("fadeInDown");
}

/*function linksClick() 
{
	
	document.getElementById("text").innerHTML = "<a href='https://twitter.com/omnigamedev' target='_blank'>Twitter</a><br><a href='https://www.youtube.com/channel/UCSwOuPjaMp3kZuqSb45pBww' target='_blank'>Youtube</a><br><a href='http://www.twitch.tv/omnipotentpotato/profile' target='_blank'>Twitch</a><br><a href='http://gamejolt.com/profile/omnipotent-potato/292626' target='_blank'>Gamejolt</a><br>";
		
	linetoworkwith = document.getElementById("text");
	
	linetoworkwith.classList.remove("fadeInDown");
	linetoworkwith.offsetWidth = linetoworkwith.offsetWidth;
	linetoworkwith.classList.add("fadeInDown");
}
*/

function gamesClick() 
{
	var games = "<img src='images/rrthumb.png' alt='rr' style='width:200px;height:200px;'>";
	document.getElementById("text").innerHTML = games;
	
	linetoworkwith = document.getElementById("text");
	
	linetoworkwith.classList.remove("fadeInDown");
	linetoworkwith.offsetWidth = linetoworkwith.offsetWidth;
	linetoworkwith.classList.add("fadeInDown");
}