var myClient = '{ "name": "Mark", "age": 30, "city": "New York"}';
    
    // "car": {
    //    "make": "Toyota",
    //    "Mode1": "V1",
    //},

var myPer = JSon.parse(myClient);

document.getElementById(
    "demo"
    ).innerHTML= `${myPer.name} ${myPer.age} ${myPer.city}`;
document.writeln(`${myPer["name"]} ${myPer["age"]} ${myPer["car.make"]}`);

document.writeln("<br/>" + myPer.name);
// console.log(myPer);