function createIterator(minValue, maxValue) {
	let counter = minValue - 1
	function iterator() {
		if (counter >= maxValue) counter = minValue - 1
		counter++
		return counter
	}
	return iterator
}

let createCounter = createIterator(1, 12)
let number = 23

for (let i = 0; i < number; i++) {
	document.write(`${createCounter()}<br>`)

}



