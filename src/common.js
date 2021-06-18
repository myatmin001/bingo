export const getRandomNumber = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

export const getFirstNumber = (value) => {
    return value === undefined || value===false ? "0" : value.slice(0,1);
}

export const getLastNumber = (value) => {
    return value === undefined || value===false ? "0" : value.slice(1,2);
}

export const removeArray =(myArray,toRemove) =>{
    myArray  = myArray.filter( function( el ) {
        return toRemove.indexOf( el ) < 0;
      } );
    return myArray;
}

export const getIndexOfEachCardNumber = (arr,k) => {
    if (!arr){
        return [];
    }
    var indexArr=[];
    for(var i=0; i<arr.length; i++){
        var index = arr[i].indexOf(k);
        if (index > -1){
            indexArr.push([i, index]);
        }
    }
    
    return indexArr;
}

export const isItemInArray = (array1, array2) => {
    return JSON.stringify(array1) === JSON.stringify(array2);
}

export const dupArr = (array1,array2) => {
    var duplicates = array1.filter(function(val) {
        return array2.indexOf(val) !== -1;
      });
    return duplicates;
}