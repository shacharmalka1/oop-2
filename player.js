const { v4: uuidv4 } = require("uuid");
class Person {
  #id;
  constructor(firstName, sureName, salary, age) {
    this.firstName = firstName;
    this.sureName = sureName;
    this.salary = salary;
    this.age = age;
    this.#id = uuidv4();
  }
  get getFirstName() {
    return this.firstName;
  }
  get getSureName() {
    return this.sureName;
  }
  get getSalary() {
    return this.salary;
  }
  get getAge() {
    return this.age;
  }
  get getId() {
    return this.#id;
  }
  set setSalary(newSalary) {
    this.salary = newSalary;
  }
  set setAge(newAge) {
    this.age = newAge;
  }
}

class Player extends Person {
  constructor(
    firstName,
    sureName,
    salary,
    age,
    strongLeg,
    position,
    celebrationSentence
  ) {
    super(firstName, sureName, salary, age);
    this.strongLeg = strongLeg;
    this.position = position;
    this.celebrationSentence = celebrationSentence;
  }
  goalCelebration() {
    console.log(this.celebrationSentence);
    this.salary *= 1.025;
  }
  get getStrongLeg() {
    return this.getStrongLeg;
  }
  get getPosition() {
    return this.position;
  }
  get getcelebrationSentence() {
    return this.celebrationSentence;
  }
  set setPosition(newposition) {
    this.position = newposition;
  }
  set seCelebrationSentence(newSentence) {
    this.celebrationSentence = newSentence;
  }
}

class GoalKeepr extends Person {
  constructor(firstName, sureName, salary, age, isLeftHanded) {
    super(firstName, sureName, salary, age);
    this.isLeftHanded = isLeftHanded;
    this.lastGoalConceded = Date.now();
  }
  get getIsLeftHanded() {
    return this.isLeftHanded;
  }
  get getLastGoalConceded() {
    return this.lastGoalConceded;
  }
  set setLastGoalConceded(newGoal) {
    this.lastGoalConceded = newGoal;
  }
  concededAGoal() {
    this.lastGoalConceded = Date.now();
    this.salary *= 0.975;
  }
}

////////////////////////////////////////////-- check --/////////////////////////////////////////////////
let messi = new Player("Leonel", "Messi", "500000", "33", "left", "cf", "hi");
console.log(messi);
console.log(messi.getId);
let neuer = new GoalKeepr(
  "Manuel",
  "Neuer",
  "300000",
  "35",
  "right",
  "gk",
  "hi"
);
console.log(neuer);
console.log(neuer.getId);
