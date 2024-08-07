let randomNumber = Math.floor(Math.random() * 100) +1; 
let chances = 100;
let form = document.querySelector(".myForm");
form.addEventListener("submit", (e)=>{
	e.preventDefault();
	// let guess = 
	let guess = document.getElementById("number").value;
	if(guess>randomNumber){
		alert("the number is smaller than your guess");
		chances -= 1;
	}else if(guess<randomNumber){
		alert("the number is larger than your guess");
		chances -= 1;

	}else if(guess == randomNumber){
		alert(`congratulations, the number is ${randomNumber}, and your score is ${chances}`);
		chances = 100;
		location.reload();
	}

});
console.log(randomNumber); 