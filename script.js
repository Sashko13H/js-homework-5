// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const student = {
//   name: "Mykola",
//   spec: "Developer",
//   bal: "85",
//   epsent: "3",
//   logInfo: function () {
//     console.log(
//       "name " +
//         this.name +
//         " spec " +
//         this.spec +
//         " bal " +
//         this.bal +
//         " epsent " +
//         this.epsent
//     );
//   },
// };
// studentTwo = {
//   name: "Ihor",
//   spec: "Developer",
//   bal: "100",
//   epsent: "0",
// };
// studentThree = {
//   name: "Evhenia",
//   spec: "Research",
//   bal: "90",
//   epsent: "2",
// };
// studentFour = {
//   name: "Ivan",
//   spec: "HR",
//   bal: "75",
//   epsent: "4",
// };
// student.logInfo();
// student.logInfo.bind(studentTwo)();
// student.logInfo.apply(studentThree);
// student.logInfo.call(studentFour);

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const inf = {
//   showitems() {
//     console.log("infa:", this.items);
//   },
// };

// const html = {
//   items:
//     "HTML (HyperText Markup Language) — це стандартизована мова розмітки документів для перегляду вебсторінок у браузері.",
// };
// const css = {
//   items: "CSS (Cascading Style Sheets) — це спеціальна мова стилю сторінок.",
// };

// inf.showitems.bind(html)();
// document
//   .querySelector(`#html`)
//   .addEventListener(`click`, inf.showitems.bind(html));
// inf.showitems.bind(css)();
// document
//   .querySelector(`#css`)
//   .addEventListener(`click`, inf.showitems.bind(css));

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

// function shop(fruit) {
//     const totalCost = Math.round(fruit.cost * fruit.quantity);
//     console.log(`Cost of ${fruit.name}: ${totalCost} UAH`);
// }  

// const sumFrut = {
//     name: "banana",
//     cost: 30,
//     quantity: 4.5,
// };  
// const cherry = {
//     name: "cherry",
//     cost: 58,
//     quantity: 1.3,
// };
// const jrange = {
//     name: "jrange",
//     cost: 89,
//     quantity: 3.4,
// };

// shop(sumFrut);
// shop(cherry);
// shop(jrange);