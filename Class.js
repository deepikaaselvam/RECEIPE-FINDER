class Person{
    constructor(firstName,lastName,dob)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.dob=new Date(dob);
      
       
    }
   


}
const p1 = new Person("John", "Doe",'4-3-1980');


console.log(p1.firstName ,p1.dob);
