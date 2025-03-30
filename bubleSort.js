const array = [1,-1,-20,4,5,7,8,2,10,15]
let count = 0

function bubleSort(array){
    for(let i = 0; i < array.length ; i++){
        for(let j = 0; j <array.length;j++){
            if (array[j+1] < array[j]){
                let tmp = array[j]
                array[j] = array[j+1]
                array[j+1] = tmp
            }
            count += 1
        }
    }
    return array
}

console.log(bubleSort(array))
console.log('Количество итераций ' + count)