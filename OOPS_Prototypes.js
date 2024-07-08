const arr1 = [1, 5, 11];
const arr2 = [2, 6, 12];
arr1.__proto__.print = () => {
    console.log(`At index 0:${arr1[0]}`);
    console.log(`At index 1:${arr1[1]}`);
    console.log(`At index 2:${arr1[2]}`);
};
arr2.__proto__.printt = () => {
    console.log(`At index 0:${arr2[0]}`);
    console.log(`At index 1:${arr2[1]}`);
    console.log(`At index 2:${arr2[2]}`);
};