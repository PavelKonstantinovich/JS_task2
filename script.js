// Задание №1

const arr = [25, 62, 9, 15, 65, 6, 11, 2]

let sum = 0
let sumEven = 0

const arrLength = arr.length
for (let i = 0; i < arrLength; i++) {
  console.log(arr[i])
  sum = sum + arr[i]
  if (arr[i] % 2 == 0){
    sumEven = sumEven + arr[i]
  }
}

// for (let item of arr) {
//   console.log(item)
//   sum = sum + item

//   if (item % 2 == 0) {
//     sumEven = sumEven + item
//   }
// }
console.log('Сумма: ', sum)
console.log('Сумма четных: ', sumEven)

// Задание №2

let arr2 = [5, 4, 3, -3, -10, -1, 8, -20, 0]
let positiveItemsArr = []
for (let item of arr2) {
  if (item > 0) positiveItemsArr.push(item)
}
console.log(positiveItemsArr)

// Задание №3

const arr3 = [5, 4, 3, 8, 0]
const resultArr = []
const limit = 5

for (let item of arr3) {
  if (item >= limit) resultArr.push(item)
}
console.log(resultArr)

// Задание №4

const children = [
  { name: 'Вова', age: 10 },
  { name: 'Света', age: 8 },
  { name: 'Катя', age: 12 },
  { name: 'Петя', age: 7 },
  { name: 'Маша', age: 11 },
]

for (let child of children) {
  if (child.age > 10) {
    console.log(child.name)
  }
}

// Задание №5

const vegetables = ['картошка', 'морковь', 'лук', 'чеснок']
const mapVegetables = []

for (let green of vegetables) {
  mapVegetables.push({
    word: green,
    length: green.length
  })
}

console.log(mapVegetables)

for (let green of mapVegetables) {
  console.log(green.word + ' - ' + green.length)
}

