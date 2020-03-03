const ages = [12, 15, 17, 20];
const age2 = [11, 16, 18, 17];
// const allages = ages.concat(age2);
const allages = [...ages, 23, 34, 22, ...age2];
console.log(allages);
// const businessmen = 350;
// const minister = 450;
// const shochib = 550;
// const maximum = Math.max(businessmen, minister, shochib);
const takapoisa = [450, 500, 600];
const max = Math.max(...takapoisa);
console.log(max);

const nums = [2, 5, 1, 7, 8, 33, 29];
const largest = Math.max(...nums);
console.log(largest);