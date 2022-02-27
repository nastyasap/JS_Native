const todoListID_1 = '5try67ui'
const todoListID_2 = '5try09ii'

const todoList = [
    {
        id: '5try67ui',
        title: 'What to learn',
        filter: 'all',
    },
    {
        id: '5try09ii',
        title: 'What to buy',
        filter: 'all',
        /*tasks: [
            {},
            {}
        ]*/
    }
]
//очень большая вложенность, чтобы поменять таску тяжело найти

const tasks = {
    [todoListID_1]: [
        {title: 'HTML', isDone: true},
        {title: 'CSS', isDone: true},
        {title: 'React', isDone: false}
    ],
    [todoListID_2]: [
        {title: 'Water', isDone: true},
        {title: 'Milk', isDone: true},
        {title: 'Monik', isDone: false}
    ]
}


console.log(tasks[todoListID_1][1].title)

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
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

//reduce
//сворачивание или сокращение

const arr = [1,2,3,,4,5,6]
console.log(arr.reduce((sum, el)=> sum + el, 10))
console.log(arr.reduce((max, el)=> max > el ? max : el, 0))

console.log(students.reduce((acc, st)=> acc + st.scores,0))
//результат операции становится на следующем заходу аккумулятором
console.log(students.reduce((acc, st)=> acc + " " + st.name,''))
console.log(students.reduce((acc, st)=> `${acc} ${st.name}`,''))
console.log(students.reduce((acc, st)=> {
    if (!st.isMarried) {acc.push(st)}
    return acc
},[]))
//push возвращает длину массива
console.log(students.reduce((acc,st)=>{acc[st.name]= st.scores
    return acc},{}))
