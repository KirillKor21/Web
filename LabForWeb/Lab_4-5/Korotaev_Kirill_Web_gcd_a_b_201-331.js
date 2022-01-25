function gcd(a,b) {

		while (a!=b) {
			
		if (a>b) {
			a = a-b;
		}
		else if (b>a) {
			b = b-a;
		}
	}

    return a;
}

a = +prompt("Enter a");
b = +prompt("Enter b");

alert(gcd(a,b));