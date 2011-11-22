(function(){
	udescApp.ui = {};
	
	udescApp.ui.createApplicationWindow = function(){
		var win = Ti.UI.createWindow({
			backgroundColor: "green"
		});
		
		var label = Ti.UI.createLabel({
			text: "Olá mundo!",
			color: "black",
			font: {
				fontWeight: "bold"
			}
		});
		
		win.add(label);
		
		return win;
	};
})();
