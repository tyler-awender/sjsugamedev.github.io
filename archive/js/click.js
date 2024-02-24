let imgDiv = document.getElementById("spotlight");
imgDiv.addEventListener('click', invisible);

function enlarge(id){
	console.log("print");
	var imgSrc = id.src;
	var largeImg = document.getElementById("spotlight_img");
	largeImg.src = imgSrc;

	let imgDiv = document.getElementById("spotlight");
	imgDiv.style.setProperty('visibility', 'visible');
}

function invisible() {
	imgDiv.style.setProperty('visibility', 'hidden');
}