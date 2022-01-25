function minDigit(a) {

	let min = 9;

	while ( a != 0 ) {

		if ( a%10 < min ) {
			min = a%10;
		}

		a = Math.floor(a/10);
	}

	return min;
}

a = +prompt("Enter A");

alert(minDigit(a));