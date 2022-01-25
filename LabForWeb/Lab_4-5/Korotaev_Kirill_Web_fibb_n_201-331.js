function fibb(n) {

	let mas = [1,1];
	for (let i = 1; i<n; i++) {
		mas.push(mas[i] + mas[i-1]);
	}

	return mas[n-1];
}



// let n = +prompt("Enter n");
// alert (fibb(n));