//ATM card and number validation

let ATM_Card = {
	let Visa = {
		let visa = [];
		function visa_card(card_number){
		if (card_number.length != 16){
		return "Valid: false, reason: Invalid length";
}		else {
		card_number.forEach(function(visa) {
		if (card_number[0] != 4){
		return "Valid: false, reason: Invalid length";
}	else {
		card_number.push(visa);
}
});
}
		card_number
}


	let MasterCard = {
		Master_card = [];
		function masterCard(card_number){
		if (card_number.length != 16){
		return "Valid: false, reason: Invalid length";
}		else {
		card_number.forEach(function(Master_card) {
		if (card_number[0] != 5){
		return "Valid: false, reason: Invalid length";
}	else {
		card_number.push(Master_card);
}
});
}
		card_number
}


	let Discover = {
		discover = [];
		function dicoverCard(card_number){
		if (card_number.length != 15){
		return "Valid: false, reason: Invalid length";
}		else {
		card_number.forEach(function(discover) {
		if (card_number[0] != 6){
		return "Valid: false, reason: Invalid length";
}	else {
		card_number.push(discover);
}
});
}
		card_number
}


	let America_Express = {
		america_Express = [];
		function expressCard(card_number){
		if (card_number.length != 16){
		return "Valid: false, reason: Invalid length";
}		else {
		card_number.forEach(function(america_Express) {
		if (card_number[0] != 3){
		return "Valid: false, reason: Invalid length";
}	else {
		card_number.push(america_Express);
}
});
}
		card_number
}
}

let Visa_card = [4, 9, 0, 7, 2, 0, 9, 4, 7, 0, 9, 4, 2, 0, 9, 3, 4];
let Master_card = [5, 9, 0, 7, 2, 0, 9, 4, 7, 0, 9, 4, 2, 0, 9, 3, 4];
let Discover_card = [6, 7, 8, 4, 6, 2, 4, 8, 2, 4, 6, 2, 4, 2, 9, 4];
let America_express_card = [3, 9, 0, 7, 2, 0, 9, 4, 7, 0, 9, 4, 2, 0, 9, 3];

console.log(ATM_Card.Visa(Visa_card))
console.log(ATM_Card.MasterCard(Master_card))
console.log(ATM_Card.Discover(Discover_card))
console.log(ATM_Card.America_Express(America_express_card))