const SAVE_INTERVAL = 4000;
const KEY_HEAT_DECAY = 8;

const KEY_HEAT_MAX = 32;
const KEY_HEAT_SAVE = 16;

var key_heat = 0;

setInterval(function () {
	//"cool off" when keys aren't being pressed
	if(key_heat > 0){
		key_heat -= KEY_HEAT_DECAY;
	}

	if (key_heat < 0){
		key_heat = 0;
	}

	//send page to server if you're over the heat threshold
	if(key_heat > KEY_HEAT_SAVE){
		console.log("Work saved");
		$.post("/save", { "html" : $(page).html()});
	}
}, SAVE_INTERVAL);

keyListeners.push(function(e){
	//maximize heat when keys are being pressed
	if(key_heat < KEY_HEAT_MAX)
		key_heat = KEY_HEAT_MAX;
});
