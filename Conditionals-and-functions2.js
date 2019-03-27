let storeA = 1.40;
let storeB = 4.40;

	function compareStorePrices (storeA, storeB) {
		let storeAIsLower = storeA < storeB;
		if(storeAIsLower) {
			console.log("Store A has a lower price")
		} else if(storeB < storeA) {
			console.log("Store B has a lower price.")
		} else {
			console.log("Their price is equal")
		}
	}

//compareStorePrices(10 , 5);
	//compareStorePrices(7, 10);

	function squareNum (number) {
		return number * number;
	}

	let squaredNumber = squareNum(7);
	console.log(squaredNumber);
