$(function(){
	
	var greeting = document.getElementById("greeting");
	var greetingOffset = $(greeting).offset().top;
	var about = document.getElementById("about");
	var aboutOffset = $(about).offset().top;
	var fullsail = document.getElementById("fullsail");
	var fullsailOffset = $(about).offset().top;
	var coderschool = document.getElementById("coder-school");
	var coderschoolOffset = $(coderschool).offset().top;
	var exclusiveCleaning = document.getElementById("exclusive-cleaning");
	var exclusiveCleaningOffset = $(exclusiveCleaning).offset().top;
	var bjs = document.getElementById("bjs");
	var bjsOffset = $(bjs).offset().top;
	var gamestop = document.getElementById("gamestop");
	var gamestopOffset = $(gamestop).offset().top;
	var i3 = document.getElementById("i3");
	var i3Offset = $(i3).offset().top;
	var wema = document.getElementById("wema");
	var wemaOffset = $(wema).offset().top;
	var landmark = document.getElementById("landmark");
	var landmarkOffset = $(landmark).offset().top;
	var tripleC = document.getElementById("triple-c");
	var tripleCOffset = $(tripleC).offset().top;
	var xen = document.getElementById("xen");
	var xenOffset = $(xen).offset().top;
	var nde = document.getElementById("nde");
	var ndeOffset = $(nde).offset().top;
	var jsp = document.getElementById("jsp");
	var jspOffset = $(jsp).offset().top;
	
	function HideElement(element) 
	{
		$(element).hide(300);
	}

	#HideElement(greeting);
	HideElement(about);
	HideElement(fullsail);
	HideElement(coderschool);
	HideElement(exclusiveCleaning);
	HideElement(i3);
	HideElement(wema);
	HideElement(bjs);
	HideElement(gamestop);
	HideElement(landmark);
	HideElement(tripleC);
	HideElement(xen);
	HideElement(nde);
	HideElement(jsp);
		
	function ShowElement(element, elementOffset)
	{		
		if ($(window).scrollTop() + $(window).height() * .7 > elementOffset)
		{
			$(element).show(300);
		}
	}
	
	#window.addEventListener("scroll", function() {ShowElement(greeting, greetingOffset)});
	window.addEventListener("scroll", function() {ShowElement(about, aboutOffset)});
	window.addEventListener("scroll", function() {ShowElement(fullsail, fullsailOffset)});
	window.addEventListener("scroll", function() {ShowElement(exclusiveCleaning, exclusiveCleaningOffset)});
	window.addEventListener("scroll", function() {ShowElement(coderschool, coderschoolOffset)});
	window.addEventListener("scroll", function() {ShowElement(i3, i3Offset)});
	window.addEventListener("scroll", function() {ShowElement(wema, wemaOffset)});
	window.addEventListener("scroll", function() {ShowElement(bjs, bjsOffset)});
	window.addEventListener("scroll", function() {ShowElement(gamestop, gamestopOffset)});
	window.addEventListener("scroll", function() {ShowElement(landmark, landmarkOffset)});
	window.addEventListener("scroll", function() {ShowElement(tripleC, tripleCOffset)});
	window.addEventListener("scroll", function() {ShowElement(xen, xenOffset)});
	window.addEventListener("scroll", function() {ShowElement(nde, ndeOffset)});
	window.addEventListener("scroll", function() {ShowElement(jsp, jspOffset)});
	
	function ScrollToNextSection()
	{
		alert("dfd");
		document.getElementById("jsp").scrollIntoView();
	}
	
	var scrollDown = document.getElementById("scroll-down");
	scrollDown.addEventListener("click", function() {ScrollToNextSection()});
	
});