const dataDoc = new Map();
const second = new Object

dataDoc.set("name", "Barend");
// console.log(first);
dataDoc.set("Name", "Rita");
// console.log(first);
// console.log(first.keys());

const Descrip = '';
const Type = '';
const Last = '';


dataDoc.set(Descrip, ["Bike", "Watch"]);
dataDoc.set(Type, ["RAT", "Alarm"]);
dataDoc.set(Last, ["2010", "2012"]);

console.log(dataDoc.has(Type));
console.log(dataDoc.get(Type));

for (const element of dataDoc.get(Type)) {
    console.log(element);    
}



