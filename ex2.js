function fact(n) {
	var sum = 1;
	while (n > 1) {
		sum *= n;
		n--;
	}
	return sum;
}

function* factorial(n){
	var x = 1;
	while (x <= n ) {
		yield fact(x);
		x++;
	}
}

// official solution:
// function *factorial (n) {
//       var result = 1;
//       for (var i = 1; i <= n; i++) {
//         result *= i;
//         yield result;
//       }
//     }

// duh! of course, go up and multiply the previous result by n. That's easier..

for (var n of factorial(5)) {
 	console.log(n);
}
// 1, 2, 6, 24, 120
