var myName = {
    name: "Mark",
    age: 30,
    city: "New York",
    car: null,
};
myName.name = "Tommy";
myName["age"] = 35;
document.getElementById(
    "demo"
    ).innerHTML= `${myName.name} ${myName.age} ${myName.city}`;
document.writeln(`${myName["name"]} ${myName["age"]} ${myName["car"]}`);