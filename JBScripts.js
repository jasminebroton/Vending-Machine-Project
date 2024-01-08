let totalAmount = 0.00;
let currentAmount = 0.00;
let spendingAmount = 0.00;
let totalMade = 0.00;
let userInput;
function addPrice(price) {
    totalAmount += price;
    document.getElementById('totalAmount').innerHTML = totalAmount.toFixed(2);
}
function resetTotalAmount() {
    totalAmount = 0;
    document.getElementById('totalAmount').innerHTML = totalAmount.toFixed(2);
}
function setCurrentAmount(price) {
    currentAmount = price;
    document.getElementById('currentAmount').innerHTML = currentAmount.toFixed(2);
}

function getSpendingAmount() {
userInput = prompt("Enter the amount you wish to add");
userInput = parseInt(userInput);
document.getElementById('moneyRemaining').innerHTML = userInput.toFixed(2);
}



function calculateChange() {
	totalMade += totalAmount;
	let change = (userInput - totalAmount) * 100;
	
	let dollars = Math.floor(change/100);
	change %= 100;
	
	let quarters = Math.floor(change/25);
	change %= 25;
	
	let dimes = Math.floor(change/10);
	change %= 10;
	
	let pennies = change;
	
	
	document.getElementById('moneyRemaining').innerHTML = dollars + " dollars" + "<br>" + quarters + " quarters" + "<br>" + dimes + " dimes" + "<br>" + pennies + " pennies";
	}

function displayTotalMade() {

	document.getElementById('moneyRemaining').innerHTML = "Total Made By Vending Machine: " + totalMade;

}