const min = 1
const max = 10

function example(min, max) {
	let generalSum = setInterval(() => {
		result = 0
		let a = Math.floor(Math.random() * (max - min) + min)
		let b = Math.floor(Math.random() * (max - min) + min)
		let userResult = parseInt(prompt(`${a}+${b} Введіть результат!`))
		result = a + b
		if (userResult === result) alert('True')
		else alert('False')
	}, 10000)
}

let getPlay = example(min, max)
