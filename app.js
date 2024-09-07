// function personmaker(name,age){ //factory as kuch ban raha hai 
//     const person={
//         name : name,
//         age : age,
//         talk(){
//             console.log(`hi , my name is ${this.name}`);
//         },
//     };
//     return person;
// }

//new opeator

// function Person(name,age){  //constructor
//     this.name = name;
//     this.age = age; 
// }
//         person.prototype.talk=function(){
//             console.log(`hi , my name is ${this.name}`);
//         };
        class person {
            constructor(name,age){
                this.name = name;
                this.age =age;
            }
            talk(){
                console.log(`hi , my name is ${this.name}`);
            }
        }
        class student{ }
let p1 = new Person("samiya",21); 
let p2 = new Person("naina",24);