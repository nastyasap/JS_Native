console.log(typeof 4) // 'number'
console.log(typeof NaN) // 'number'
console.log(typeof Infinity) // 'number'
console.log(Number.isFinite(Infinity)) // true
console.log(Number.isNaN(NaN)) // true

console.log(typeof null) // 'object' но null совсем не объект
console.log(typeof {}) // 'object'
console.log(typeof []) // 'object'
console.log(Array.isArray([])) // true
console.log(typeof (() => {
})) // 'function' ???

const user = {name: 'Ann'}
const myFriend = user
console.log(user === myFriend) //true сравнивает ссылки
console.log({} === {}) //false разные ссылки

const cloneUser = {...user} //поверхностное клонирование
// (копирование)
//другой объект, добавить внутренности объекта
//cloneUser.name = user.name
//const cloneUser = {...user, isStudent: true} //поверхностное клонирование
//добавить еще пару ключ-значение
delete cloneUser.name //удалить что-то

const arr = [1, 2, 4, 5, 6]
const copyArr = [...arr]
console.log(arr === copyArr) //false

// как сделать копию объекта

const complexUser = {
    name: 'Alex',
    age: 25,
    friends: ['Nancy', 'Kate']
}

const copyComplexUser = {...complexUser}//поверхностная копия (неполная)
copyComplexUser.friends.push('John')
console.log(complexUser)
// в изначальный массив добавился джон, так как там была просто ссылка
// т.е. мы изменили изначальный объект а не копию

const deepCopyComplexUser = {...complexUser, friends: [...complexUser.friends]} //полная копия
// перезаписываем friend
deepCopyComplexUser.friends.push('Olga')
console.log(deepCopyComplexUser.friends)
console.log(copyComplexUser.friends)



