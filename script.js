$(document).ready(function() {

	// FIRST: set the background of the scene-container div 
	// 			choose the background:  
	//				img/beach.jpg
	//				img/dancefloor.jpg
	//				img/room.jpg





	// SECOND: create an arrays of images, have at least 3 arrays
	// 			examples (for the dorm room): 
	//				desks = []
	//				beds = []
	// 				lamps = []
	//				posters = []
	//
	// I've created one for you:
	var friends = [
		"img/friends/friend01.gif", "img/friends/friend02.gif", 
		"img/friends/friend03.gif", "img/friends/friend04.gif", 
		"img/friends/friend05.gif", "img/friends/friend06.gif",
		"img/friends/friend07.gif", "img/friends/friend08.gif"
		];



	// THIRD: populate menu
	// for each list you have insert a list in the html of the page

	function insertImageToMenu(imageUrl){
		$('#menu-container').append("<img src='" + imageUrl + "'/>");
	}

	// MANUAL - no work here... we prefer if you choose dynamic

	// DYNAMIC




	// FOURTH: handle adding items to your scene when selected in menu
	function insertImageToScene(imageUrl){
		$('#scene-container').append("<img src='" + imageUrl + "'/>");
	}

	// MANUAL 

	// DYNAMIC






	// FIFTH: make items draggable in your scene


	// SIXTH (EXTRA TASK): make items resizable


	// SEVENTH (EXTRA TASK): add music to your page

	
});