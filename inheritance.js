class Parent {
    constructor() {
        this.fatherName = "Hridoy Banik";
    }
}
class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }
    getFullName() {
        return this.name + " " + this.fatherName;
    }
}
const baby = new Child("Susmi");
console.log(baby.getFullName());