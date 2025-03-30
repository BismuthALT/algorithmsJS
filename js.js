const array = [1, 5 , 7 , 2 ,3 ,4 ,2 ,11 ,101,200,5,7];
let count = 0

function linerSearch(array, item){
    for(let i = 0; i < array.length; i++){
        count += 1
        if (array[i] === item)
            return i
    }
}
array.sort();
console.log(array)

console.log(linerSearch(array, 7))
console.log("Количество операций " + count)
