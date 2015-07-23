$(document).ready(function() {

	// FIRST: choose the background - are you creating a:
	//			- day at the beach
	//			- dance party
	//			- design your dorm room
	function changeBackground(){
		// choose beach
		//$('#scene-container').css('background-image', 'url("./img/beach.jpg")');
		// choose dance floor
		//$('#scene-container').css('background-image', 'url("./img/dancefloor.jpg")');
		// choose room
		$('#scene-container').css('background-image', 'url("./img/room.jpg")');		
	}

	changeBackground();

	// SECOND: create an arrays of images, have at least 3 arrays
	// 			examples (for the dorm room): 
	//				desks = []
	//				beds = []
	// 				lamps = []
	//				posters = []
	//
	// I've created one for you:
	var friends = [
		"img/friend01.gif", "img/friend02.gif", 
		"img/friend03.gif", "img/friend04.gif", 
		"img/friend05.gif", "img/friend06.gif",
		"img/friend07.gif", "img/friend08.gif"
		];


	// THIRD: populate menu
	// for each list you have insert a list in the html of the page
	function setUpMenu(){

	}

	// FOURTH: handle adding items to your scene when selected in menu


	// FIFTH: make items draggable in your scene


	// SIXTH (EXTRA TASK): make items resizable


	// SEVENTH (EXTRA TASK): add music to your page

	
});