//closure example

const add = (a) => {
    return function y(b) {
        return a + b;
    }
}

console.log(add(1)(2));


//currying //prototype //flatarr //

//infinite currying sum


//let sum = a => b => b ? sum(a + b) : a;
//
let sum = (a) => {
    return (b) => {
        if (b) {
            return sum(a + b)
        }
        else {
            return a
        }
    }
}
console.log(sum(10)(20)(3)(4)());



//flatArr question

const flatArr = (arr) => {
    const flat = [];
    arr.map((x, i) => {
        if (Array.isArray(x)) {
            flatArr(x)
        }
        else {
            flat.push(x)
        }
        return flat
    })

}
//some modification
// const flatArr = (arr, flat = []) => {
//     arr.map((x, i) => {
//         if (Array.isArray(x)) {
//             flatArr(x, flat)
//         }
//         else {
//             flat.push(x)
//         }
//     })
//     return flat
// }


//Prototype Example fully
//using new keyword-> functions are first class objects



//Prototype-> object to store shared properties
function UserCreator(name, score) {
    this.name = name;
    this.score = score;
    return this;
}

UserCreator.prototype.increment = function () {
    this.score++;
    console.log(this.score)
}
UserCreator.prototype.login = function () {
    console.log('login')
}

const user1 = new UserCreator('Eva', 9)

console.log(user1.increment())





//promise example









//Why filter leaves zeroes-->

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
//see examples from here once





//High order function examples
const hoc = (callback, arr) => {
    const output = []
    for (let i = 0; i < arr.length; i++) {
        output.push(callback(arr[i]))
    }
    return output
}
const multiplyBy2 = (x) => x * 2

console.log(hoc(multiplyBy2, [1, 2, 3, 3]))



//map --->returns undefined if condition not satisfied
let numbers = [1, 2, 3, 4]
let filteredNumbers = numbers.map(function (num, index) {
    if (index < 3) {
        return num
    }
})
// index goes from 0, so the filterNumbers are 1,2,3 and undefined.
// filteredNumbers is [1, 2, 3, undefined]
// numbers is still [1, 2, 3, 4]


//but in forEach no operation for uninitialized values as below
const arraySparse = [1, 3, , 7]
let numCallbackRuns = 0

arraySparse.forEach(function (element) {
    //console.log(element)
    numCallbackRuns++
})

//console.log("numCallbackRuns: ", numCallbackRuns)



//Converting to object using reduce
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce((acc, x) => {
    if (x in acc) {
        acc[x] = acc[x] + 1
    }
    else {
        acc[x] = 1
    }
    return acc
}, {})

console.log(countedNames)








//function vs arrow function
1.






//call vs apply vs bind

const obj = {
    name: 'amit',
    wife: 'sonam',
    age: 27
}

function borrowWifeForCooking(a) {
    console.log(`He is borrowing ${this.name} wife whose name is ${a}`)

}

borrowWifeForCooking.call(obj, 'sonam');
borrowWifeForCooking.apply(obj, ['sonam']);
const fn = borrowWifeForCooking.bind(obj, 'sonam');
fn()
