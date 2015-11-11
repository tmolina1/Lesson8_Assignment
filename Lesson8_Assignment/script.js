/**
Program Name: Recipe Display Application 
Author: Tiffany Molina
Date: November 11, 2015

Filename: script.js
*/

function display(event){

    $(event.currentTarget).next().fadeIn("slow");

}//end of display()

/*
$("h3").click(display);
*/

function display2(event) {

   $(event.currentTarget).next().animate( { height: 'toggle'}, "slow");

}

/*
$("h3").click(display2);
*/
$("h3").hover(display2);


