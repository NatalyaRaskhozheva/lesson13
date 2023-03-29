// function createIterator(minValue, maxValue) {
// 	let counter = minValue - 1
// 	function iterator() {
// 		if (counter >= maxValue) counter = minValue - 1
// 		counter++
// 		return counter
// 	}
// 	return iterator
// }

// let createCounter = createIterator(1, 12)
// let number = 23

// for (let i = 0; i < number; i++) {
// 	document.write(`${createCounter()}<br>`)

// }

function createIterator(word) {
	let counter = -1
	function iterator() {
		counter++
		return word[counter]
	}
	return iterator
}

const word = 'apple'
let cntr = createIterator(word)

function getLetter() {
	let number = 0
	for (let i = 0; i < word.length; i++) {
		let letter = prompt('Популярний фрукт, введіть літеру')
		if (letter === cntr()) number++
	}
	return number
}
let cntrLetter = getLetter()
document.write(`В слові ${word} ви вгадали ${cntrLetter} літери`)





