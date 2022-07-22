$(document).ready(function() {
    let audio = document.getElementById("spotAudio")
    let currSong = $("#songs a:first-child")
    let nextSong = currSong.next()
    let prevSong = $("#songs a:last-child")
    // Play music
    $("#play").click(function() {
	console.log("playing music")
	$("#play").hide()
	$("#pause").show()
	audio.play()
    });
    // Pause music
    $("#pause").click(function() {
	console.log("pausing music")
	audio.pause()
	$("#pause").hide()
	$("#play").show()
    });
    // Change music tracks
    $("#songs a").click(function() {
	playSong($(this))
    });
    // Go to next track
    $("#next").click(function() {
	playSong(nextSong)
    });
    // Go to previous track
    $("#prev").click(function() {
	playSong(prevSong)
    });

    function playSong(song) {
	// Underline selected track in the sidebar
	$("#songs a").css("text-decoration", "none")
	song.css("text-decoration", "underline")
	// Update audio source
	let songInfo = song[0].innerText
	filepath = "music/" + songInfo.slice(0, 3)
	$("#mp3").attr("src", filepath + ".mp3")
	$("#ogg").attr("src", filepath + ".ogg")
	$("#play").hide()
	$("#pause").show()
	audio.load()
	audio.play()
	// Update footer with new music info
	filepath = "assets/" + songInfo.slice(0, 3)
	$("#songImg").attr("src", filepath + ".jpeg")
	let cdotInd = songInfo.indexOf("⋅")
	let songTitle = songInfo.slice(0, cdotInd - 1)
	let songArtist = songInfo.slice(cdotInd + 2)
	$("#songTitle").text(songTitle)
	$("#songArtist").text(songArtist)
	// Update prev track and next track
	nextSong = song.next()
	prevSong = song.prev()
	if (song.is(":last-child")) {
	    console.log("last child")
	    nextSong = $("#songs a:first-child")
	}
	if (song.is(":first-child")) {
	    console.log("first child")
	    prevSong = $("#songs a:last-child")
	}
    }
});
