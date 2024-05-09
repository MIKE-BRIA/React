let age: number;
age = 12;

//*type alias
type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "John",
  age: 12,
};

let course: string | number = "React - The Complete Guide";

course = 3481390;

//*functions and types

function add(a: number, b: number) {
  return a + b; 
}
