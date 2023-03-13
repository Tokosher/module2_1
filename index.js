// const strings = ['My', 'name', 'is', 'John'];

// for (const string of strings) {
//     console.log(string)
// }

// break continue
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// Вивести числа з масиву, окрім 2, 4 індексу
// for (let i = 0; i < numbers.length; i++) {
//     if (i === 2 || i === 4) {
//         continue;
//     }
//
//     console.log(numbers[i]);
// }

// Вивести елементи масиву до 5 індексу
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// for (let i = 0; i < numbers.length; i++) {
//     if (i === 5) {
//         break;
//     }
//
//     console.log(numbers[i]);
// }
//
// console.log('End')

// increments and decrements
// let counter = 10;
// console.log(counter++) // 10
// console.log(++counter) // 12
// console.log(counter++) // 12
// console.log(++counter) // 14

// Практика
// Модуль 2. Заняття 3. Масиви

// Example 1 - Базові операції з масивом
// Створіть масив genres з елементами «Jazz» та «Blues».
// Додайте «Рок-н-рол» до кінця.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.
// const genres = ['Jazz', 'Blues'];
//
// genres.push('Rock-N-Roll');
//
// console.log(genres[genres.length - 1])
//
// console.log(genres.shift())
//
// genres.unshift('Country', 'Reggae');
//
// console.log(genres)








// Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.
//
// const values = '8 11';
//
// const splitResult = values.split(' ') // ['8', '11']
//
// const side1 = +splitResult[0]; // 8
// const side2 = +splitResult[1]; // 11
//
// const result = side1 * side2;
//
// console.log(result);





// Example 3 - Перебір масиву
// Напиши скрипт для перебору масиву fruits циклом for. Для кожного елемента масиву виведи в консоль рядок у форматі номер_елемента: значення_елемента. Нумерація елементів повинна починатися з 1.
//
// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
//
// let counter = 0;
//
// for (const fruit of fruits) {
//     console.log(++counter, fruit);
// }









// Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.
//
// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
//
// const namesArray = names.split(',');
// const phonesArray = phones.split(',');
//
// for (let i = 0; i < namesArray.length; i++) {
//     console.log(namesArray[i], phonesArray[i]);
// }









// Example 5 - Масиви та рядки
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього. Результуючий рядок не повинен починатися або закінчуватися символ пробілу. Скрипт повинен працювати для будь-якого рядка.
//
// const string = 'Welcome to the future';
// const words = string.split(' ')
//
// for (let i = 0; i < words.length; i++) {
//     if (i === 0 || i === words.length - 1) {
//         continue;
//     }
//
//     console.log(words[i]);
// }




// Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить його в консоль.
//
// const string = 'Welcome to the future';
// const words = string.split('')
// const reversedArray = words.reverse();
// const result = reversedArray.join('')
// console.log(result)




// Example 7 - Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.
//
// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];






// Example 8 - Пошук елемента
// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
//
const numbers = [2, 17, 94, 1, 23, 37];
let min = numbers[0];

for (const number of numbers) {
    if (min > number) {
        min = number;
    }
}

console.log(min)



