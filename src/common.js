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

export const shuffle = (array) => {
    var currentIndex = array.length,  randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}