function sumTo(n){

//1-й вариант

var	sum=0;

for (var i=1;i<=n;i++){

	sum+=i;

}

return sum;		

//2-й вариант

/*if (n == 1) return 1;

  return n + sumTo(n - 1);

*/

//3-й вариант

//return n*(n+1)/2;

}

var userNum=+prompt('Введите число для суммирования');

if (userNum<1) alert('Число должно быть >= 1');

else alert(sumTo(userNum));