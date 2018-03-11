var menu = jQuery.noConflict();
		menu("document").ready(function(){
		
			menu(window).scroll(function () {
				   var top = menu(window).scrollTop();
				  

				if(top > 10 )  {
					menu('nav').addClass("navbar-custome");
					menu('nav').removeClass("navbar-default");
				} 
				
				else {
					menu('nav').removeClass("navbar-custome");
					menu('nav').addClass("navbar-default");
				}
			});

		});
		
