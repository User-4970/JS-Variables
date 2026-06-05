// 1
let name = prompt("введи ім'я:")
alert("hello, " + name + "!")

// 2
const yearNow = 2026
let birth = +prompt("Рік народження:")
alert("тобі " + (yearNow - birth) + " років")

// 3
let side = +prompt("сторона квадрата:")
alert("периметр = " + (side * 4))

// 4
let r = +prompt("Радіус кола:")
alert("площа = " + (Math.PI * r * r))

// 5
let dist = +prompt("відстань км:")
let time = +prompt("за скільки годин:")
alert("швидкість = " + (dist / time) + " км/год")

// 6
const rate = 0.92
let usd = +prompt("скільки доларів:")
alert("Євро = " + (usd * rate))

// 7
let gb = +prompt("обсяг флешки у ГБ:")
let files = Math.floor((gb * 1024) / 820)
alert("файлів вміститься: " + files)

// 8
let money = +prompt("сума грошей:")
let price = +prompt("ціна шоколадки:")
let count = Math.floor(money / price)
let change = money % price
alert("можна купити: " + count + ", здача: " + change)

// 9
let num = +prompt("тризначне число:")
let rev = (num % 10) * 100 + Math.floor((num % 100) / 10) * 10 + Math.floor(num / 100)
alert("перевертень: " + rev)

// 10
let n = +prompt("число:")
alert(n % 2 === 0 ? "парне" : "непарне")
