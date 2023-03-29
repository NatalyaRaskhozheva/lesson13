// //Рекурсивний алгоритм
// function result(n) {
// 	if (n === 0) return 1
// 	else
// 		return result(n - 1) + 2 * n 
// }

// нерекурсивний алгоритм
function result(n) {
	let res = 1
	for (let i = 1; i <= n; i++) {
		res += 2 * i
	}
	return res
}

let f10 = result(10)
document.write(`${f10}`)



//х0 = 1, хі = хі-1+2і, де i =1, 2 
