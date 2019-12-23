function count_change(amount) {
	let res = []
	function cc(amount, kind_of_coins) {
		if (amount === 0) {
			return 1
		} else if (amount < 0 || kind_of_coins === 0) {
			return 0
		} else {
			return cc(amount, kind_of_coins - 1) + 
			cc(amount - first_denomination(kind_of_coins), kind_of_coins) 
		}
	}
	function first_denomination(kind_of_coins) {
		return kind_of_coins === 1 ? 1:
				kind_of_coins === 2 ? 5:
				kind_of_coins === 3 ? 10:
				kind_of_coins === 4 ? 50:
				kind_of_coins === 5 ? 100 : 0
	}
	return cc(amount, 5)
}

// 1 1 1 1 1 1
// 5 1

console.log(count_change(6))