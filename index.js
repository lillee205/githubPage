$(document).ready(function(){
    audio = document.getElementById("spotAudio")
    $("#play").click(function(){
	console.log("playing music")
	$("#play").hide()
	$("#pause").show()
	audio.play()
    });
    $("#pause").click(function(){
	console.log("pausing music")
	audio.pause()
	$("#pause").hide()
	$("#play").show()
    });
});
