let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    }, {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

let names = []
for (let i = 0; i < students.length; i++) { // перебор массива
    const name = students[i].name //получение данных из каждого элемента исходного массива
    names[i] = name //добавление данных в новый массив
}

console.log(names)

const trueStudents = []
for (let i = 0; i < students.length; i++) {
    const trueStudent = {...students[i], isStudent: true}
    //the same
    /*const trueStudents = {
        name: students[i].name,
        age: students[i].age,
        isMarried: students[i].isMarried,
        scores: students[i].scores,
        isStudent: true
    }*/
    trueStudents[i] = trueStudent
}

console.log(trueStudents)

//так как код дублируется, создадим функцию
function myApp(arr, callback) {
    const resultArray = []
    for (let i = 0; i < arr.length; i++) {
        const newData = callback(arr[i])
        //нужно добавить еще функцию, которая конкретно говорит что делать с каждым элементом массива
        // myApp перебиратель, callback преобразователь
        resultArray[i] = newData
    }
    return resultArray
}

console.log(myApp(students, s => s.name))
console.log(myApp(students, s => ({...s, isStudent: true})))
console.log(students.map(s => ({...s, isStudent: true})))
console.log(students.map(s => ({...s, isStudent: true})))

function myFilter(arr, callback) {
    const resultArray = []
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i]) === true) {
            resultArray.push(arr[i])
        }
        //тут не преобразования, а проверка
    }
    return resultArray
}

console.log(myFilter(students, s => s.scores >= 100))
console.log(students.filter(s => s.scores >= 100))

function myFind(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])===true) {
            return  arr[i]
        }
    }
    return undefined
}

console.log(students.find(s=>s.name=== 'Bob'))
console.log(myFind(students, s=>s.name=== 'Bob'))
