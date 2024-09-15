class User{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

let user3 = new User("John",45);
let user4 = new User("Jim",50);

function elderUser(user1,user2){
    let elder = (user1.age>user2.age)?user1.name:user2.name;
    return elder;
}

console.log(elderUser(user3,user4));