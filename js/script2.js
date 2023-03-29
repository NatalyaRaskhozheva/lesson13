//рекурсивний алгоритм
function result(i) {
	if (i === 0 || i === 1) return 1
	else
		return result(i - 1) + 2 * result(i - 2)
}

//нерекурсивний алгоритм
// function result(i) {
// 	if (i === 0 || i === 1)
// 		return 1
// 	else {
// 		let f_i_0 = f_i_1 = 1
// 		for (let n = 2; n <= i; n++) {
// 			f_i = f_i_0 + 2 * f_i_1

// 			f_i_1 = f_i_0
// 			f_i_0 = f_i
// 		}
// 		return f_i
// 	}
// }

let f3 = result(3)
document.write(`${f3}`)

//х0=х1=1, хі= (хі-1)+2(х_і-2) де і = 2, 3