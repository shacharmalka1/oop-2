class Person {
    #id;
    constructor(firstName, sureName, salary, age, id) {
        this.firstName = firstName
        this.sureName = sureName
        this.salary = salary
        this.age = age
      this.#id = id;
    }
    get getFirstName(){
     return this.firstName  
    }
    get getSureName(){
     return this.sureName
    }
    get getSalary(){
     return this.salary 
    }
    get getAge(){
     return this.age
    }
    get getId(){
     return this.#id 
    }
    set setSalary(newSalary){
    this.salary = newSalary 
       }
    set setAge(newAge){
    this.age = newAge
       }
}

class Player extends Person{
    constructor(firstName, sureName, salary, age, id,strongLeg, position, celebrationSentence){
        super(firstName, sureName, salary, age, id)
        this.strongLeg = strongLeg
        this.position = position
        this.celebrationSentence = celebrationSentence
    }
    goalCelebration(){
    console.log(this.celebrationSentence);
    this.salary *= 1.025
    }
    get getStrongLeg(){
    return this.getStrongLeg
    }
    get position(){
    return this.position
    }
    get celebrationSentence(){
    return this.celebrationSentence
    }
    set position(newposition){
    this.position = newposition
    }
    set celebrationSentence(newSentence){
    this.celebrationSentence = newSentence
    }

}

class GoalKeepr extends Person{
    constructor(firstName, sureName, salary, age, id,isLeftHanded, lastGoalConceded ){
        super(firstName, sureName, salary, age, id)
        this.isLeftHanded = isLeftHanded
        this.lastGoalConceded = lastGoalConceded
    }
    get isLeftHanded(){
        return this.isLeftHanded
        }
    get lastGoalConceded(){
        return this.lastGoalConceded
        }
    set lastGoalConceded(newGoal){
        this.lastGoalConceded = newGoal
    }
    concededAGoal(){
    // this.lastGoalConceded
    this.salary *= 0.975    
    }
}
]