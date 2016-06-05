# Laravel 5.2 Angular test project for Devision

[Live demo test App] (http://78.128.71.92/)

# Requirements
PHP >= 5.5.9
OpenSSL PHP Extension
PDO PHP Extension
Mbstring PHP Extension
Tokenizer PHP Extension

# Installation
1. Clone this repository in your web folder
2. Go to devision folder and edit .env file : 
DB_DATABASE=devision
DB_USERNAME=root
DB_PASSWORD=alex
3. Import sql dump from sql/devision.sql to your new database
4. make folders /storage and /public/uploads writable by chmod -R 777 /storage /public/uploads
5. In root folder project run:  php artisan cache:clear  and  php artisan config:cache 
6. Start php server by: php artisan serve
7. Go to http://localhost:8000

# Screenshots
### List products with sorting and remove
[List products] (https://github.com/alextoshinov/devision/blob/master/devision-list-products.png)

### Add product
[Add product] (https://github.com/alextoshinov/devision/blob/master/devision-add-product.png)

### Product details
[product details] (https://github.com/alextoshinov/devision/blob/master/devision-product-details.png)

# 5 tasks
Please see console.info browser for results [Demo in Fiddle] (https://jsfiddle.net/g8s37cch/3/)

```javascript
/******************************** task 1 *******************************************/
//Example array for task 1
var A = [3,1,2,4,3];

function task1(A) {
	//Init variables
	var i, N = A.length, all = 0, start = 0, range = 1000;
	//Get all sum 
	for (i = 0; i < N; i++)
	{
		all += A[i];
	} 
	//Calculate difference partOne and partTwo
	for (i = 0; i < N-1; i++)
	{
	    start += A[i];
	    var partOne = start, partTwo = all - partOne, difference = Math.abs(partOne - partTwo);
	    if (difference < range) {
	    	range = difference;
	    }	         
	}
	//
	return range;
}
//
console.info('Task 1: ',task1(A));
/********************************* task 2 ******************************************/
// Example values for task 2
var X = 10, Y = 85,  D = 30;
//
function task2(X, Y, D) {
	return Math.ceil((Y -X) / D);
}
//
console.info('Task 2: ',task2(10, 85, 30));
/********************************* task 3 ******************************************/
//Example array for task 3
/*    
		A[0] = 1
		A[1] = 3
		A[2] = 1
		A[3] = 4
		A[4] = 2
		A[5] = 3
		A[6] = 5
		A[7] = 4   
	    X = 5
*/
var frogArr = [1,3,1,4,2,3,5,4];
var X = 5;
//
function task3(X, frogArr) {
  var i;
  var len = frogArr.length;
  var frogJump = 0;
  var P = new Array(X);
  //Check If the frog is never able to jump to the other side of the river
  if (X > len) {
    return -1;
  }
  //
  for (i = 0; i < len; i++) {
    P[i] = 0;
  }
  //
  for (i = 0; i < len; i++) {
    if (frogArr[i] <= X) {
      if (P[frogArr[i] - 1] === 0) {
        P[frogArr[i] - 1] = 1;
        frogJump++;
        if (frogJump === X) {
          return i;
        }
      }
    }
  }
  return -1;
}
//
console.info('Task 3: ',task3(5, frogArr));
/********************************* task 4 ******************************************/
/*
For example, given array A such that:

  A[0] = 10    A[1] = 2    A[2] = 5
  A[3] = 1     A[4] = 8    A[5] = 20
the function should return 1, as explained above. Given array A such that:

  A[0] = 10    A[1] = 50    A[2] = 5
  A[3] = 1
the function should return 0.
*/
var examArr1 = [10,2,5,1,8,20]; //should return 1
var examArr2 = [10,50,5,1]; 	//should return 0
//
function task4(exArray){
	//Sort array values
    exArray = exArray.sort(function (a, b) {  return a - b;  });
    //Check if is triangular
    if (exArray.length < 3) {
    	return 0;
    } 
    //
    for(i = 2; i < exArray.length; i++){
        if(exArray[i] < (exArray[i-1] + exArray[i-2])){
            return 1;
        }
    }
    //
    return 0;
}
//
console.info('Task 4: ',task4(examArr1)); //should return 1
console.info('Task 4: ',task4(examArr2)); //should return 0
/********************************* task 5 ******************************************/
/*
For example, given array H containing N = 9 integers:

  H[0] = 8    H[1] = 8    H[2] = 5
  H[3] = 7    H[4] = 9    H[5] = 8
  H[6] = 7    H[7] = 4    H[8] = 8
the function should return 7. The figure shows one possible arrangement of seven blocks.
*/
var H = [8,8,5,7,9,8,7,4,8];
//
function task5(H) {
    var len = H.length;
    var stones = 0;
    var wall = new Array(len);
    var wallNum = 0;
    //
    for (var i = 0; i < len; i++)
    {
        while (wallNum > 0 && wall[wallNum-1] > H[i]) wallNum -= 1;   
        if (wallNum > 0 && wall[wallNum -1] == H[i]) {
        	continue;
        } else {
                stones +=1;
                wall[wallNum] = H[i];
                wallNum +=1;     
        }
    }
    //
    return stones;
}
//
console.info('Task 5: ',task5(H));
```

