let x = +prompt("Enter x");
let n = +prompt("Enter n");

function pow(x,n) {

	if (n%1 == 0 && n>=1) {
	    let res=1;
		for(let i=0; i<n; i++) {
			res=res*x;
		};
		return res;
	}
	else {
		return "Число "+ n + " не натуральное";
	}
};

alert(pow(x,n));