$(function(){
	
	// container is the DOM element;
	// userText is the textbox
	
	var container = $("#scrambler");
		userText = $('#userText')
	
	// Shuffle the contents of container
	container.shuffleLetters();

	// Bind events
	userText.click(function () {
		
	  userText.val("");
	  
	}).bind('keypress',function(e){
		
		if(e.keyCode == 13){
			
			// The return key was pressed
			
			container.shuffleLetters({
				"text": userText.val()
			});
			
			userText.val("");
		}

	}).hide();

	// Leave a 4 second pause

	setTimeout(function(){
		
		// Shuffle the container with custom text
		
		userText.val("type anything and hit return..").fadeIn(3000);
		
	},4000);
	
});

//DOPE STEEZ











