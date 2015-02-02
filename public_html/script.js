/* 
 * 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function(){
    /*
     * this highlights evrything in the class "blue"
     */
    $(".blue").css("background-color", "yellow");
    /*
     * this makes an accordion and puts evrything under id superHumans 
     * in the accordion
     */
    
    $('#superHumans').accordion({header: "h3"});
    $('#superHumans').css('width', '400px');
    /*
     * this makes h1 change when you have the mouse over it or off of it
     */
    
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    /*
     * this replaces tyext when you click on it but only works if 
     * it has the id replaceWText
     */
    
    $('#replaceWText').bind('click', replaceWText);
    /*
     * this adds text when you click on text with the id randPara
     */
    
    $('#randPara').bind('click', addAPara);
    /*
     * this removes text when you click on text with the id removePara
     */
    
    $('#removePara').bind('click', removeAPara);
    
    $('#show').bind('visibility', 'hidden');
    /*
     * this hides the page when you click on the text with the id hide
     */
    
    $('#hide').bind('click', hideThePage);
    /*
     * this shows the page when you click the button with id show
     */
    
    $('#show').bind('click', showThePage);
});

function hideThePage(){
    /*
     * 
     */
    $('#show').css('visibility', 'visible');
    $('div').hide('slide', {}, 1500);
    $('show').show('fold', {}, 1500);
}

function showThePage(){
    $('div').show('fold', {}, 1500);
    $('#show').hide('puff', {}, 1500);
}

function mouseOverMe() {
    /*
     * this makes the h1 text change to hello when you have the mouse over it
     */
    $("h1").html("hello");
}

function mouseOutMe() {
    /*
     * this makes the h1 text change to hey when you have the mouse off of it
     */
    $('h1').html("hey");
}

function removeAPara(){
    /*
     * this removes the last added text when you click on the text with id removeAPara
     */
    $('#randPara p:last').remove();
}

function addAPara(){
    /*
     * this adds the text "ADDED" when you click on text with id addaPara
     */
    
    $('#randPara').append('<p>ADDED</p>');
}

function replaceWText(){
    /*
     * this replaces the teext with the id replaceWText with "Replaced!"
     */
    $('#replaceWText').text('Replaced!');
}
