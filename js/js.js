function displayInfo () {
	document.querySelector('.empDetails').style.display = 'inline';
	// document.querySelector('.p-sm2').style.fontSize = '30px'; 
	document.querySelector('.toggleUp').style.display = 'inline';
	document.querySelector('.toggleDown').style.display = 'none';


}


function hideInfo () {
	document.querySelector('.toggleDown').style.display = 'inline'; 
	document.querySelector('.toggleUp').style.display = 'none';
	document.querySelector('.empDetails').style.display = 'none';
}
