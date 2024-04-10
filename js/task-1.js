// function isEnoughCapacity(products, containerSize) {
//   let totalProducts = 0;
//   for (const product in products) {
//     totalProducts += products[product];
//   }
//   return totalProducts <= containerSize;
// }
// console.log(
//   isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
// );
// console.log(
//   isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
// );
// console.log(
//   isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
// );
// console.log(
//   isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
// );

// const numbers = [5, 10, 15, 20, 25];
// numbers.forEach(function (number, index) {
//   console.table(`Index ${index}, value ${number}`);

// const array = [1, 2, 3]
// function foo() {
//   for (let i = 0; i < array.length; i++) {
//     array[i] = array[i] * 2;
//   }
// }

// рахування чисел
// function each(array, callback) {
//   const newArr = [];
//   for (const item of array) {
//     newArr.push(callback(item))
//   }
//   return newArr;
// }

// console.log(each([64, 49, 25, 16, 4], function (value) {
//   return value * 2;
// }))
// console.log(each([64, 49, 25, 16, 4], function (num) {
//   return num - 10;
// }))

// function add(a, b) {
//   return a + b;
// }
// const add = () => {
//   return "lalala"
// }
// console.log(add())

// const add = (a, b, c) => {
//   return a + b + c;
// }
// console.log(add(5, 10, 15))

// array.forEach(element => {
  
// });

// function getExtremeElements(array) {
//   // const firstElements = array[0];
//   const lastElements = array.length - 1;
//   return [array[0], array[lastElements]];
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));


// function calculateEngravingPrice(message, pricePerWord) {
//   const word = message.split(" ");
//   return word.length * pricePerWord;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10))

// const firstArray = ["Mercury", "Venus"];
// const secondArray = ["Mars", "Jupiter"];
// const thirsdArray = ["Sun", "Moon"]
// const result = secondArray.concat(firstArray, thirsdArray);
// console.log(result)

// Функція getSlice(array, value) приймає два параметра:
// array - масив довільних елементів
// value - значення елемента масиву для пошуку
// Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:

// порожній масив, якщо в array немає елемента зі значенням value
// підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array
// Оголошена функція getSlice(array, value)
// Виклик getSlice(["Mango", "Poly", "Ajax"], "Poly") повертає ["Mango", "Poly"]
// Виклик getSlice(["Mango", "Poly", "Ajax"], "Ajax") повертає ["Mango", "Poly", "Ajax"]
// Виклик getSlice(["Mango", "Poly", "Ajax"], "Mango") повертає ["Mango"]
// Виклик getSlice(["Mango", "Poly", "Ajax"], "Jacob") повертає []
// Виклик getSlice(["Mango", "Poly", "Ajax"], "Casey") повертає []
// function getSlice(array, value) {
//   const index = array.indexOf(value);
//   return array.slice(0, index + 1);
// }
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"))
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"))
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"))
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"))

// Функція createArrayOfNumbers(min, max) приймає два параметра:
// min - ціле число, з якого починаються обчислення
// max - ціле число, до якого включно триватимуть обчислення
// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max включно.
// Оголошена функція createArrayOfNumbers(min, max)
// Виклик функції createArrayOfNumbers(1, 3) повертає [1, 2, 3]
// Виклик функції createArrayOfNumbers(14, 17) повертає [14, 15, 16, 17]
// Виклик функції createArrayOfNumbers(29, 34) повертає [29, 30, 31, 32, 33, 34]
// Виклик функції createArrayOfNumbers() з випадковими min і max повертає правильний масив
// В циклі for використовувався метод push
// function createArrayOfNumbers(min, max) {
//   const result = [];
//   for (let i = min; i <= max; i++) {
//     result.push(i)
//   }
//   return result
// }
// console.log(createArrayOfNumbers(1, 3))
// console.log(createArrayOfNumbers(14, 17))

// Функція calculateTotalPrice(order) приймає один параметр order - масив чисел. Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.
// Оголошена функція calculateTotalPrice(order)
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції calculateTotalPrice() з випадковим масивом повертає правильне значення
// function calculateTotalPrice(order) {
//   let total = 0
//   for (let i = 0; i < order.length; i++){
//     total += order[i];
//   }
//   return total
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]))

// Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами. Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end. Якщо жодного парного числа немає, то масив має бути пустим. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0). Використовуй цикл for.

// Оголошена функція getEvenNumbers(start, end)
// Виклик функції getEvenNumbers(2, 5) повертає [2, 4]
// Виклик функції getEvenNumbers(3, 11) повертає [4, 6, 8, 10]
// Виклик функції getEvenNumbers(6, 12) повертає [6, 8, 10, 12]
// Виклик функції getEvenNumbers(8, 8) повертає [8]
// Виклик функції getEvenNumbers(7, 7) повертає []
// Виклик функції getEvenNumbers() з випадковими start і end повертає правильний масив
// function getEvenNumbers(start, end) {
//   let number = [];
//   for(let i = start; i <= end; i++){
//     if (i % 2 === 0) {
//       number.push(i)
//     }
//   }
//   return number
// }
// console.log(getEvenNumbers(2, 5))

// function checkStorage(storage, item) {
//   let low = item.toLowerCase();
//   if (storage.includes(low)){
//     return`${low} is available to order!`
//   }
//   else {
//     return `Sorry! We are out of stock!`
//   }
// }
// console.log(checkStorage(["apple", "plum", "pear"], "plum"))
// console.log(checkStorage(["apple", "plum", "pear"], "carrot"))
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"))


// Перед розв'язанням цієї задачі варто зазначити, що таке спільні елементи. Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.
// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вхідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.
// Функція getCommonElements(array1, array2), приймає два масиви (array1 та array2) довільної довжини в якості параметрів.
// Доповни код функції:
// Створи порожній масив для зберігання нового масиву.
// Використай цикл for для ітерації кожного елемента у array1.
// У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
// Якщо він існує, то додай елемент до нового масиву.
// Поверни наповнений масив спільних елементів як результат роботи функції.
// Оголошена функція getCommonElements(array1, array2)
// Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
// Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
// Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
// Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
// Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
// Виклик функції getCommonElements() з випадковими двома масивами повертає правильний масив
// function getCommonElements(array1, array2) {
//   let result = [];
//   for (let i = 0; i < array1.length; i++){
//       if (array2.includes(array1[i])) {
//    result.push(array1[i])
//       }
//   }
//   return result
//   }
  
  
// console.log(getCommonElements([1, 2, 3], [2, 4]))
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))


// function calculateTotalPrice(order) {
//   let total = 0
//   for(const orders of order){
//     total += orders
//   }
//   return total
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]))
