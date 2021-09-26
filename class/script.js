class Person{
    constructor(firstname,lastname,age,gender)
    {
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
        this.gender=gender;
    }


}



console.log(this.firstname+this.lastname+''+this.age+'years'+''+'is' +this.gender)
let Person1=new Person('sanuja','kumari',30,'female');
let Person1=new Person('ishitha','shegesh',7,'female');
