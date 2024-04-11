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


// Функція createReversedArray() може приймати довільну кількість аргументів. Доповни код функції так, щоб вона повертала масив усіх аргументів, але в масиві вони повинні йти у зворотному порядку. Тобто, при виклику createReversedArray(1, 2, 3), функція має повернути масив [3, 2, 1]. Використовуй цикл або метод масиву toReversed(), який застосовується до масиву і результатом роботи повертає новий масив з елементами у зворотньому порядку.
// Оголошена функція createReversedArray()
// Виклик функції createReversedArray(12, 85, 37, 4) повертає [4, 37, 85, 12]
// Виклик функції createReversedArray(164, 48, 291) повертає [291, 48, 164]
// Виклик функції createReversedArray(412, 371, 94, 63, 176) повертає [176, 63, 94, 371, 412]
// Виклик функції createReversedArray() повертає []
// function createReversedArray() {
//   let arr = Array.from(arguments)
//   return arr.toReversed()
// }
// console.table(createReversedArray(12, 85, 37, 4))


// Функція calculateTax(amount, taxRate) оголошує два параметри:
// amount - число, сума від якої потрібно обчислити податок. Обов'язковий параметр.
// taxRate - число, податкова ставка. Необов'язковий параметр. За замовчуванням його значення має бути 0.2.
// Доповни код функції так, щоб вона повертала суму податку - результат множення суми на податкову ставку.
// Оголошена функція calculateTax(amount, taxRate)
// Виклик функції calculateTax(100, 0.1) повертає 10
// Виклик функції calculateTax(200, 0.1) повертає 20
// Виклик функції calculateTax(100, 0.2) повертає 20
// Виклик функції calculateTax(200, 0.2) повертає 40
// Виклик функції calculateTax(100, 0.3) повертає 30
// Виклик функції calculateTax(200, 0.3) повертає 60
// Виклик функції calculateTax(100) повертає 20
// Виклик функції calculateTax(200) повертає 40
// function calculateTax(amount, taxRate = 0.2) {
//   const result = amount * taxRate;
//   return result
// }
// console.log(calculateTax(100))
// console.log(calculateTax(200, 0.3))


// Перш, ніж розв’язувати задачу, давай визначимося із новим терміном!
// Термін slug — це зрозумілий людині унікальний ідентифікатор, який використовується у веб розробці для створення читабельних URL-адрес.
// Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com/posts/1q8fh74tx, можна зробити slug із назви статті. У результаті адреса буде приємнішою для сприйняття: mysite.com/posts/arrays-for-begginers.
// Slug — це завжди рядок у нижньому регістрі, слова якого розділені тире.
// З цим розібралися? А тепер давай нарешті виконувати задачу!
// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title і повертає slug, створений із цього рядка.
// Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
// Усі символи slug повинні бути в нижньому регістрі.
// Усі слова slug повинні бути розділені тире.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// function slugify(title) {
//   const slug = title.toLowerCase().split(" ").join("-");
//   return slug;
// }

// console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"


// Напиши функцію під назвою makeArray, яка приймає три параметри: firstArray (масив), secondArray (масив) і maxLength (число). Функція повинна створювати новий масив, який містить усі елементи з firstArray, а потім усі елементи з secondArray.

// Якщо кількість елементів у новому масиві перевищує maxLength, функція повинна повернути копію масиву з довжиною maxLength елементів.
// В іншому випадку функція повинна повернути весь новий масив.


// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// function makeArray(firstArray, secondArray, maxLength) {
//   let arr = firstArray.concat(secondArray)
//   return arr.slice(0, maxLength)
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []


// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (numbers) та значення (value) як параметри. Функція повинна повертати новий масив лише тих чисел із масиву numbers, які більші за значення value.
// Усередині функції:
// Створи порожній масив, у який будеш додавати підходящі числа.
// Використай цикл для ітерації кожного елемента масиву numbers.
// Використовуй умовний оператор if усередині циклу для перевірки кожного елемента и додавання до свого масиву.
// Поверни свій новий масив з підходящими числами як результат.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

function filterArray(number, value) {
  let total = []
  for (let i = 0; i >= value; i++){
    if 
  }
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]