// 1. დაწერეთ for ციკლი, 0 დან 50 - მდე console.log ში დაბეჭდეთ ინდექსი i
for (let i = 0; i < 50; i++) {
  console.log(i);
}

// 2. დაწერეთ while ციკლი 0 დან 20 - მდე console.log ში დაბეჭდეთ ინდექსი i
let i = 0;
while (i < 20) {
  console.log(i);
  i++;
}
// 3. დაწერეთ do while ციკლი 0 დან 30 - მდე console.log ში დაბეჭდეთ ინდექსი i
let a = 0;
do {
  console.log(a);
  a++;
} while (a < 30);
// 4. მოცემული გვაქვს მასივი const numbers = [1,2,5,7,8,10,23,24,26]. for ლუპის დახმარებით შეამოწმეთ მასივის ყველა ელემენტი და  კონსოლში გამოიტანეთ ამ მასივიდან მხოლოდ ლუწი რიცხვები.
const numbers = [1, 2, 5, 7, 8, 10, 23, 24, 26];
for (let x = 0; x <= numbers.length; x++) {
  if (numbers[x] % 2 === 0) {
    console.log(numbers[x]);
  }
}
// 5. გამოიყენეთ const currentDay = new Date().getDay(); ცვლადი;   currentDay ცვლადი გვაძლევს რეალურ კვირის დღეს რიცხვითი სახით 0 - არის კვირა, 1 - არის ორშაბათი და ასე შემდეგ.( 0 - 6 ამდე რიცხვს აბრუნებს სადაც 6 არის შაბათი, ყოველდღე სხვადასხვა მნიშვნელობას დაგიბრუნებთ) , დავწეროთ switch სადაც შევამოწმებთ currentDay-ს და 0 ის შემთხვევაში console.log ში გამოვიტანთ სიტყვას - კვირა, 1 ის შემთხვევაში - ორშაბათს და ასე შემდეგ 6 - შაბათი.
const currentDay = new Date().getDay();
switch (currentDay) {
  case 0:
    console.log("Sunday");
  // break;
  case 1:
    console.log("Monday");
  // break;
  case 2:
    console.log("Tuesday");
  // break;
  case 3:
    console.log("Wednesday");
  // break;
  case 4:
    console.log("Thursday");
  // break;
  case 5:
    console.log("Friday");
  // break;
  case 6:
    console.log("Saturday");
}
// 6. ლექციაზე დაწერილ რეპოზიტორში მოცემულია ფაილი app.js სადაც გვაქვს ვალუტების მასივი (currencies). გადააკოპირეთ ეს მასივი თქვენთან. შემდეგ დაწერეთ loop (for ან while)  და მასივის თითოეულ ელემენტზე შეამოწმეთ rate   პარამეტრის მნიშვნელობა თუ არის მეტი 5-ზე. თუ 5-ზე მეტია, კონსოლში გამოიტანეთ ასეთი ვალუტების სახელი და rate   პარამეტრის მნიშვნელობა (მთლიანი ობიექტი არა).
const currencies = [
  {
    code: "AED",
    quantity: 10,
    rateFormated: "6.8886",
    diffFormated: "0.0082",
    rate: 6.8886,
    name: "არაბეთის გაერთიანებული საამიროების დირჰამი",
    diff: -0.0082,
    date: "2023-04-10T17:45:04.522Z",
    validFromDate: "2023-04-11T00:00:00.000Z",
  },
  {
    code: "AMD",
    quantity: 1000,
    rateFormated: "6.4869",
    diffFormated: "0.0334",
    rate: 6.4869,
    name: "სომხური დრამი",
    diff: -0.0334,
    date: "2023-04-10T17:45:04.522Z",
    validFromDate: "2023-04-11T00:00:00.000Z",
  },
  {
    code: "CZK",
    quantity: 10,
    rateFormated: "1.1820",
    diffFormated: "0.0010",
    rate: 1.182,
    name: "ჩეხური კრონა",
    diff: 0.001,
    date: "2023-04-10T17:45:04.522Z",
    validFromDate: "2023-04-11T00:00:00.000Z",
  },
  {
    code: "EUR",
    quantity: 1,
    rateFormated: "2.7599",
    diffFormated: "0.0056",
    rate: 2.7599,
    name: "ევრო",
    diff: -0.0056,
    date: "2023-04-10T17:45:04.522Z",
    validFromDate: "2023-04-11T00:00:00.000Z",
  },
];

let currenciesLenth = currencies.length;
for (let i = 0; i < currenciesLenth; i++) {
  if (currencies[i].rate > 5) {
    console.log(currencies[i].code);
    console.log(currencies[i].rate);
  }
}
