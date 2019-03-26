function factorial(num) {
	if (num == 1) return num
	return num * factorial(num - 1)
}

for(let i = 1; i < 10; i++)
	console.log(`${i}:`, factorial(i))