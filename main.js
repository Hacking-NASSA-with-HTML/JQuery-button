$(document).ready(function() {

			$("#redirectToFacebook").on("click", function(){
				// Put your address instead of mine
			     	//$(this).attr("href", "https://www.facebook.com/YOUR_PAGE_HERE");
			     		$(this).attr("href", "https://www.facebook.com/vyacheslav.plekhanov");
			});

			//just for testing JQuery is set correctly
			$("#coolIdName").on("click", function(){
			     		$(this).css('background-color', 'green');
			});



	}); // closed $(document).ready(function() 