/* on blur = a particular element loses focus
   $ : a jQuery function and it is equal to : document.addEventListener("DOMContentLoaded" , .. ) ; 
       which means anything inside of this function that we provide in here that's what that $ function expects in this type of scenario that 
       if you put a function inside of it what's going to happen is it's going to get loaded or this function is going to get executed when HTML has been processed, 
       but before all the images and extra resources have been loaded.
   par contre $("") serves as a querySelector
*/
$(function() {
	//same as document.querySelector("#navbarToggle").addEventListener("blur"....)
	$("#navbarToggle").blur(function(event){
	   var screenWidth = window.innerWidth; //tekhou l width mtaa browser screen
	   if (screenWidth < 750) {
	   	$("#navbarMenu").collapse('hide');
	   }
	});
});