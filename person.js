class person {
    constructor(name,gender,qualification,age,location){
        this.name = name;
        this.gender = gender;
        this.qualification =qualification; 
        this.age = age;
        this.location = location
    }
getPersonDetails(){
    return(`The person  details are
     Name: ${this.name},
     Gender: ${this.gender},
     Qualification: ${this.qualification},
     Age: ${this.age}, 
     Location: ${this.location},`)
}
}
let person1= new person("Amreesh","Male","B.E",25,"chennai")
console.log(person1.getPersonDetails())