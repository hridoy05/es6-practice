function add(num1, num2 = 20) {
    // num2 = num2 || 0;

    return num1 + num2;
}
const total = add(15);
console.log(total);


function detail(name, age = 18) {
    const user = {};
    user.name = name;;
    user.age = age;
    return user;
}
const profile = detail("hridoy");
console.log(profile);