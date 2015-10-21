Meteor.startup(function(){
	var body = document.body;
	body.style.display = "none"
	body.className = body.className + "fullbleed layout vertical"
	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			var classes = ["fullbleed", "layout", "vertical", "flex"]
			var div = document.getElementById("__blaze-root")
			if (div) {
				var divClasses = div.className.split(" ").push("flex")
				div.className = _.union(divClasses, classes).join(" ")				
			}
		});    
	});
	 	
	var observerConfig = {
		childList: true
	};
	 
	observer.observe(body, observerConfig);

	window.addEventListener('WebComponentsReady', function(e) {
	  body.style.display = ""
	});
	
})