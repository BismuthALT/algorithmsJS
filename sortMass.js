const array = [1,-1,-20,4,5,7,8,2,10,15]
let count = 0

function sortArray(array){
    for ( let i = 0; i < array.length; i++){
        let minIndex = i
        for(let j = i+1 ; j < array.length; j++){
            if (array[j] < array[minIndex]) {
                minIndex = j
            }
            count += 1
        } 
        let tmp = array[i]
        array[i] = array[minIndex]
        array[minIndex] = tmp
    }
    return array
}   

console.log(sortArray(array))
console.log("Количество итераций " + count)