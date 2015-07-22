	/* Dummy event service data */
	var events = [
	{ eventId: 1 ,eventTitle: "Event 1" , eventDateTime: "Fri Jul 24 2015",eventVenue: "venue 1", eventImageUrl: "images/event 1.jpg", eventCaption: "caption 1", eventDescription: "description 1" },
	{ eventId: 2 ,eventTitle: "Event 2" , eventDateTime: "Fri Jul 24 2015",eventVenue: "venue 2", eventImageUrl: "images/event 2.jpg", eventCaption: "caption 2", eventDescription: "description 2" },
	{ eventId: 3 ,eventTitle: "Event 3" , eventDateTime: "Fri Jul 24 2015",eventVenue: "venue 3", eventImageUrl: "images/event 3.jpg", eventCaption: "caption 3", eventDescription: "description 3" },
	{ eventId: 4 ,eventTitle: "Event 4" , eventDateTime: "Fri Jul 24 2015",eventVenue: "venue 4", eventImageUrl: "images/event 4.jpg", eventCaption: "caption 4", eventDescription: "description 4" },
	{ eventId: 5 ,eventTitle: "Event 5" , eventDateTime: "Fri Jul 24 2015",eventVenue: "venue 5", eventImageUrl: "images/event 5.jpg", eventCaption: "caption 5", eventDescription: "description 5" },
	{ eventId: 6 ,eventTitle: "Event 6" , eventDateTime: "Fri Jul 24 2015",eventVenue: "venue 6", eventImageUrl: "images/event 1.jpg", eventCaption: "caption 6", eventDescription: "description 6" },
	{ eventId: 7 ,eventTitle: "Event 7" , eventDateTime: "Fri Jul 24 2015",eventVenue: "venue 7", eventImageUrl: "images/event 2.jpg", eventCaption: "caption 7", eventDescription: "description 7" },
	{ eventId: 8 ,eventTitle: "Event 8" , eventDateTime: "Fri Jul 24 2015",eventVenue: "venue 8", eventImageUrl: "images/event 3.jpg", eventCaption: "caption 8", eventDescription: "description 8" },
	{ eventId: 9 ,eventTitle: "Event 9" , eventDateTime: "Fri Jul 24 2015",eventVenue: "venue 9", eventImageUrl: "images/event 4.jpg", eventCaption: "caption 9", eventDescription: "description 9" },
	{ eventId: 10 ,eventTitle: "Event 10" , eventDateTime: "Fri Jul 24 2015",eventVenue: "venue 10", eventImageUrl: "images/event 5.jpg", eventCaption: "caption 10", eventDescription: "description 10" },
	{ eventId: 11 ,eventTitle: "Event 11" , eventDateTime: "Fri Jul 24 2015",eventVenue: "venue 11", eventImageUrl: "images/event 1.jpg", eventCaption: "caption 11", eventDescription: "description 11" },
	{ eventId: 12 ,eventTitle: "Event 12" , eventDateTime: "Fri Jul 24 2015",eventVenue: "venue 12", eventImageUrl: "images/event 2.jpg", eventCaption: "caption 12", eventDescription: "description 12" },
	{ eventId: 13 ,eventTitle: "Event 13" , eventDateTime: "Fri Jul 24 2015",eventVenue: "venue 13", eventImageUrl: "images/event 3.jpg", eventCaption: "caption 13", eventDescription: "description 13" },
	{ eventId: 14 ,eventTitle: "Event 14" , eventDateTime: "Fri Jul 24 2015",eventVenue: "venue 14", eventImageUrl: "images/event 4.jpg", eventCaption: "caption 14", eventDescription: "description 14" },
	{ eventId: 15 ,eventTitle: "Event 15" , eventDateTime: "Fri Jul 24 2015",eventVenue: "venue 15", eventImageUrl: "images/event 5.jpg", eventCaption: "caption 15", eventDescription: "description 15" },
	{ eventId: 16 ,eventTitle: "Event 16" , eventDateTime: "Fri Jul 24 2015",eventVenue: "venue 16", eventImageUrl: "images/event 1.jpg", eventCaption: "caption 16", eventDescription: "description 16" },
	{ eventId: 17 ,eventTitle: "Event 17" , eventDateTime: "Fri Jul 24 2015",eventVenue: "venue 17", eventImageUrl: "images/event 2.jpg", eventCaption: "caption 17", eventDescription: "description 17" },
	{ eventId: 18 ,eventTitle: "Event 18" , eventDateTime: "Fri Jul 24 2015",eventVenue: "venue 18", eventImageUrl: "images/event 3.jpg", eventCaption: "caption 18", eventDescription: "description 18" },
	{ eventId: 19 ,eventTitle: "Event 19" , eventDateTime: "Fri Jul 24 2015",eventVenue: "venue 19", eventImageUrl: "images/event 4.jpg", eventCaption: "caption 19", eventDescription: "description 19" },
	{ eventId: 20 ,eventTitle: "Event 20" , eventDateTime: "Fri Jul 24 2015",eventVenue: "venue 20", eventImageUrl: "images/event 5.jpg", eventCaption: "caption 20", eventDescription: "description 20" }

	];
	/* End */

	(function(){

		var Resources = {
			extraLargeTileWidth: 320,
			largeTileWidth: 320,
			smallTileWidth: 160,
			extraSmallTileWidth: 80
		};

		var app = angular.module("homeApp", []);
		app.controller("homeCtrl", function($scope){
		
			var eventDetailsOverlay;
			$scope.displayState = { Grid: 0, List: 1};
			$scope.events = events; // use service to get data in future
			$scope.numberOfLargeTiles = 4;
			$scope.selectedEvent = null;
			$scope.selectedDisplayState = $scope.displayState.Grid;
			// $scope.showPopup = function(event){
			// 	var overlay = document.getElementById("overlay"),
			// 	element = event.currentTarget;

			// 	if(element && overlay)
			// 	{
			// 		if(!element.getElementsByClassName("overlay").length)
			// 		{
			// 			element.innerHTML += overlay.innerHTML;
			// 			$scope.searchString = "";
			// 		}
			// 	}

			// }

			// $scope.hidePopup = function(event){
			// 	var element = event.currentTarget;

			// 	if(element)
			// 	{
			// 		var overlay = element.getElementsByClassName("overlay");
			// 		if(element.getElementsByClassName("overlay").length)
			// 		{
			// 			element.removeChild(overlay[0]);
			// 		}
			// 	}	
			// }

			$scope.togglePopup = function(event){
				var element = event.currentTarget;

				if(element){
					overlay = element.getElementsByClassName("overlay");
					if(overlay.length){
						overlay[0].classList.toggle('hide');
					}
				}
			}

			$scope.openEventDetails = function(){
				$scope.selectedEvent = this.event;
			}

			$scope.closeEventDetails = function(){
				$scope.selectedEvent = null;
			}

			$scope.changeDisplayState = function(state){
				$scope.selectedDisplayState = state;
			}

			/* remove hide class from body */
			document.getElementsByTagName("body")[0].classList.remove("hide");

			// Responsive Changes
			function responsiveChanges(){
				var availableWidth = window.innerWidth * 0.96 - Resources.extraLargeTileWidth;
				
				var remainingWidth =  availableWidth % Resources.largeTileWidth;

				if(remainingWidth >= Resources.smallTileWidth) {
					$scope.numberOfLargeTiles = parseInt( availableWidth / Resources.largeTileWidth);						
				}
				else{
					$scope.numberOfLargeTiles = 2 * parseInt( availableWidth / Resources.largeTileWidth ) ;		
				}

				$scope.$apply();
			}

			window.addEventListener("resize", responsiveChanges);
			responsiveChanges();
		});

		/* Add custom fiter */
		app.filter('slice', function() {
			return function(arr, start, end) {
				return (arr || []).slice(start, end);
		};
	});
}());