export const getRandomNumber = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

export const getFirstNumber = (value) => {
    return value === undefined ? "0" : value.slice(0,1);
}

export const getLastNumber = (value) => {
    return value === undefined ? "0" : value.slice(1,2);
}